// Storage Init
const storageAccess = localStorage

function getProductsFromLocalStorage() {
    const products = storageAccess.getItem("productLocalStorage")
    console.log(products)
    if (!products) {
        return {}
    }
    return JSON.parse(products)
};

/**
 * Update local storage with new items
 * @param {object} items
 */
function updateLocalStorage(items) {
    storageAccess.setItem("productLocalStorage", JSON.stringify(items))
}

/**
 * Add new item to cart
 * @param {string} id
 * @param {string} color
 * @param {integer} quantity
 */
function addToCart(id, color, quantity) {
    // récupérer les produits du localStorage
    let itemsElements = getProductsFromLocalStorage()
    // add product to cart
    if (itemsElements[id]) {
        console.log("Ce produit existe déjà")
        if (itemsElements[id][color]) {
            console.log("ce produit existe déjà avec cette couleur")
            // add chosenQuantity of same id and same color
            console.log(itemsElements[id][color])
            itemsElements[id][color] = parseInt(itemsElements[id][color]) + parseInt(quantity)
        } else {
            // create new entry of same id (chosenColor, chosenQuantity)
            itemsElements[id][color] = parseInt(quantity)
        };
    }
    if (!itemsElements[id]) {
        console.log("ce produit n'existe pas ici")
        // create new entry (idOfProduct, chosenColor, chosenQuantity)
        itemsElements[id] = {
            [color]: parseInt(quantity)
        }
    }
    // maj localStorage après ajouts
    updateLocalStorage(itemsElements)
};

function removeElementFromLocalStorage(elementId, elementColor) {
    let itemsElements = getProductsFromLocalStorage()
    if (itemsElements[elementId][elementColor]) {
        if (Object.keys(itemsElements[elementId]).length > 1) {
            delete itemsElements[elementId][elementColor]
        } else {
            delete itemsElements[elementId]
        }
    }
    updateLocalStorage(itemsElements)
    location.reload()
}

function changeQuantity() {

}

function changeQuantityFromLocalStorage(elementId, elementColor, newQuantityInput) {
    let itemsElements = getProductsFromLocalStorage()
    // console.log(itemsElements)
    if (itemsElements[elementId][elementColor]) {
        itemsElements[elementId][elementColor] = newQuantityInput
        console.log(itemsElements)
    }
    updateLocalStorage(itemsElements)
    location.reload()
}