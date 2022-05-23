// getlocalStorage
const productList = getProductsFromLocalStorage()

let totalOfItems = 0
let cartTotalPrice = 0

for (const [id, colors] of Object.entries(productList)) {

  for (const [color, quantity] of Object.entries(colors)) {

    // fetch based on each color for each id in localStorage
    fetch("http://localhost:3000/api/products/" + id)
      .then(function (response) {
        if (response.ok) {
          response.json()
            .then(function (product) {
              fillCartDOM(product)
            })
        }
      })

    /**
     * Filling DOM function
     * @param {Object} product
     */
    function fillCartDOM(product) {

      // filling main HTML with each article
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

      // filling total items quantity and price
      // Define elements to update for total items quantity and total price
      const cartNumberOfElements = document.getElementById("totalQuantity")
      const cartTotalPriceTextZone = document.getElementById("totalPrice")
      // update of items and prices
      totalOfItems += quantity;
      cartTotalPrice += product.price * quantity;
      cartNumberOfElements.innerHTML = totalOfItems
      console.log(cartTotalPrice)
      cartTotalPriceTextZone.innerHTML = cartTotalPrice
    }
  }
}



// Order form
// utiliser les RegEx pour vérifier que le formulaire est rempli correctement

// Define form elements
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let city = document.getElementById("city")
let adress = document.getElementById("adress")
let email = document.getElementById("email")

// Define RegExp for elements
let namesRegExp = new RegExp("A-Za-z,.' -")
let adressregExp = new RegExp("A-Za-z,.'0-9 -")
let mailRegExp = new RegExp("a-z+@.a-z")

function formCheck() {
  firstName.addEventListener("change", function (event) {
    // check correct RegExp usage with namesRegExp
    //   if (RegExp.test not - true){
    //   let errorMsgTextZone = document.getElementById("firstNameErrorMsg")
    //   errorMsgTextZone.innerHTML = "Veuillez renseigner votre prénom"
    //   return 0;
    // }
  })
  lastName.addEventListener("change", function (event) {
    // check correct RegExp usage with namesRegExp
  })
  city.addEventListener("change", function (event) {
    // check correct RegExp usage with namesRegExp
  })
  adress.addEventListener("change", function (event) {
    // check correct RegExp usage with adressRegExp
  })
  email.addEventListener("change", function (event) {
    // check correct RegExp usage with mailRegExp
  })
}

// Validate order
let orderBtn = document.getElementById("order")

orderBtn.addEventListener("click", function (event) {
  const contact = {
    firstName: "first name",
    lastName: "last name",
    adress: "adress",
    city: "city",
    email: "mail"
  }

})
