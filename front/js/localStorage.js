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
    // ajouter les produits au cart
    if (itemsElements[id]) {
        console.log("Ce produit existe déjà")
        if (itemsElements[id][color]) {
            console.log("ce produit existe déjà avec cette couleur")
            // add 1 of same id and same color
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

// Define listened tags and closest
let removeBtn = document.getElementsByClassName("deleteItem")
let inCartQuantity = document.getElementsByClassName("itemQuantity")
let inCartQuantityOfThis = inCartQuantity.closest("deleteItem") // erreur lié au fait que .closest est relié à des classes, et que la méthode doit s'appliquer sur un objet unique
let removeThisItem = removeBtn.closest("deleteItem")
let modifyQuantity = document.getElementsByClassName("itemQuantity")
let modifyThisQuantity = modifyQuantity.closest("itemQuantity")

// remove item
removeThisItem.addEventListener("click", function (MouseEvent) {
    console.log(MouseEvent)
    // getProductsFromLocalStorage
    // if (product){
    //     remove this item from localStorage using storage.removeItem(thisItem)
    // } 
    // updateLocalStorage()
})

// modify item quantity
modifyThisQuantity.addEventListener("click", function (MouseEvent) {
    console.log(MouseEvent)
    // getProductsFromLocalStorage
    // if (product){
    //     set quantity to modifyThisQuantity.value
    // } 
    // updateLocalStorage()
})