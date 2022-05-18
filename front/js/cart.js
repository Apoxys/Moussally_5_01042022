// getlocalStorage
const productList = getProductsFromLocalStorage()

let totalOfItems = 0
let cartTotalPrice = 0

for (const [id, colors] of Object.entries(productList)) {
  console.log("iterationX" + id + colors)

  for (const [color, quantity] of Object.entries(colors)) {
    // update total of items
    console.log("iterationY" + color + quantity)
    totalOfItems += quantity;

    // fetch based on each color for each id in localStorage
    fetch("http://localhost:3000/api/products/" + id)
      .then(function (response) {
        if (response.ok) {
          response.json()
            .then(function (product) {
              fillCartDOM(product)
              cartTotalPrice += product.price * quantity;
              console.log(cartTotalPrice)
              cartTotalPriceTextZone.innerHTML = cartTotalPrice
            })
        }
      })

    /**
     * Filling DOM function
     * @param {Object} product
     */
    function fillCartDOM(product) {
      // product-color currently printing NaN instead of currect color
      const insertCartElements = document.getElementById("cart__items")
      insertCartElements.innerHTML += `<article class="cart__item" data-id="${product._id}" data-color="${color}">
                <div class="cart__item__img">
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>${color}</p>
                    <p>${product.price}€ </p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`
    }
  }
}



// remplir le total d'objets et le prix total de la commande
// Define elements to update
const cartNumberOfElements = document.getElementById("totalQuantity")
cartNumberOfElements.innerHTML = totalOfItems
const cartTotalPriceTextZone = document.getElementById("totalPrice")
console.log("before inner html " + cartTotalPrice)



// Formulaire d'envoi de commande
// utiliser les RegEx pour vérifier que le formulaire est rempli correctement