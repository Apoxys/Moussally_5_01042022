// Storage Init
const storageAccess = localStorage
/**
 * Acces the localStorage. Return a blank object if empty. Parse the result otherwise
 * @returns 
 */
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
    let itemsElements = getProductsFromLocalStorage()

    if (itemsElements[id]) {
        if (itemsElements[id][color]) {
            itemsElements[id][color] = parseInt(itemsElements[id][color]) + parseInt(quantity) // add chosenQuantity of same id and same color
        } else {
            itemsElements[id][color] = parseInt(quantity) // create new entry of same id (chosenColor + chosenQuantity)
        };
    }
    if (!itemsElements[id]) { 
        itemsElements[id] = {
            [color]: parseInt(quantity) // create new entry (idOfProduct, chosenColor, chosenQuantity)
        }
    }
    updateLocalStorage(itemsElements)
};

/**
 * Remove elements from localStorage
 * @param {string} elementId 
 * @param {string} elementColor 
 */
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

/**
 * Change and update quantity
 * @param {string} elementId 
 * @param {string} elementColor 
 * @param {integer} newQuantityInput 
 */
function changeQuantityFromLocalStorage(elementId, elementColor, newQuantityInput) {
    let itemsElements = getProductsFromLocalStorage()
    if (itemsElements[elementId][elementColor]) {
        itemsElements[elementId][elementColor] = newQuantityInput
        console.log(itemsElements)
    }
    updateLocalStorage(itemsElements)
    location.reload()
}

/**
 * Send an order with form datas and IDs of products
 * @param {object} contact 
 * @param {array} products 
 */
function sendOrder(contact, products) {

    let postRouteOption = {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ contact, products })
    }

    fetch('http://localhost:3000/api/products/order', postRouteOption)
        .then(function (response) {
            if (response.ok) {
                response.json(response)
                    .then(function (res) {
                        console.log(res)
                        window.alert("Vous avez passé commande avec succès")
                        location.replace(`confirmation.html?id=${res.orderId}`)
                    })
            }

        })
        .catch((err) => {
            console.log(err)
        })
}