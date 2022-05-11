// Storage Calling
const storageAccess = localStorage

function getProductsFromLocalStorage() {
    const products = storageAccess.getItem("productLocalStorage")
    if (!products){
    return {}
    }
    return JSON.parse(products)
};

/*  */
function updateLocalStorage(items){
    storageAccess.setItem("productLocalStorage", JSON.stringify(items))
}

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
