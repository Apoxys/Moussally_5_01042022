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

// Remove product from cart
function RemoveItem(id, color) {
    let itemsElements = getProductsFromLocalStorage()

    let removeBtn = document.getElementsByClassName("delete_item")

    removeBtn.forEach(element => {
        removeBtn.addEventListener("click", function (mouseEvent) {
            console.log(mouseEvent)
            let thisRemoveBtn_i = removeBtn.closest("article")
            // retirer this.color de this.item
            // if (itemsElements[id]![color]){retirer this.item complètement}
            thisRemoveBtn_i.innerHTML = null
        })
        thisRemoveBtn_i.remove - item // storage
    })
    // update after removing 
    updateLocalStorage(itemsElements)
}

// Modify quantity in cart
function modifyItemQuantity(id, color, quantity) {
    let itemsElements = getProductsFromLocalStorage()

    let modifyQuantity = document.getElementsByClassName("itemQuantity")

    modifyQuantity.forEach(element => {
        let thisQuantityModifier = modifyQuantity.closest("div > input")

        thisQuantityModifier.addEventListener("change", function (mouseEvent) {
            thisQuantityModifier.value = user - input

        });
    })

    // update after modifying quantity
    updateLocalStorage(itemsElements)
}