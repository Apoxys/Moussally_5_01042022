// Storage Init
const storageAccess = localStorage

function getProductsFromLocalStorage() {
    const products = storageAccess.getItem("productLocalStorage")
    if (!products){
        return console.log("products not defined");
    }
    return JSON.parse(products)
};

/**
 * Update local storage with new items
 * @param {object} items
 */
function updateLocalStorage(items){
    storageAccess.setItem("productLocalStorage", JSON.stringify(items))
}

/**
 * Add new item to cart
 * @param {string} id
 * @param {string} color
 * @param {integer} quantity
 */
function addToCart(id, color, quantity){
    // récupérer les produits du localStorage
    let itemsElements = getProductsFromLocalStorage()
    // ajouter les produits au cart
    if (itemsElements[id]){
        if (itemsElements[id][color]){
            // add 1 of same id and same color
             // get currentquantity
        } else {
            // create new entry of same id but different color
        };
    } 
    if (!itemsElements[id]){
        // create new entry
        itemsElements[id] = {
            [color] : quantity
        }
    }
    // maj localStorage après ajouts
    updateLocalStorage(itemsElements)
};

// Define listened tags
// let thisProduct = titleTagOfProduct.innerHTML
const selectTag = document.getElementById('colors')
const inputQuantity = document.getElementById('quantity')
const btnAddProduct = document.getElementById('addToCart');

// Btnclick listener to add to cart and update
btnAddProduct.addEventListener("click", click)
function click (){
    let chosenColor = selectTag.value
    let chosenQuantity = inputQuantity.value
    console.log (`${chosenColor}  ${chosenQuantity}  ${idOfProduct}`)
    if (chosenQuantity >= 1 && chosenQuantity <= 100){
        if (chosenColor === ""){
            window.alert("Veuillez choisir une couleur")
        } else {
            window.alert (`Vous avez choisi ${chosenQuantity} modèle(s) de notre ${idOfProduct} dans sa teinte ${chosenColor}`)
            console.log ("proceed") // code addtocart
        }
    } else {
        window.alert ("Veuillez choisir une quantité valide")
    }
}

