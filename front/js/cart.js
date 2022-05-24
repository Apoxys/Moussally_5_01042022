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
              removeProduct()
              changeQuantity()
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

// Remove product from cart
function removeProduct() {
  let removeBtn = document.getElementsByClassName("deleteItem")
  console.log(removeBtn)

  Object.values(removeBtn).forEach(element => {
    element.addEventListener("click", function () {
      let thisRemoveBtn = element.closest("article")
      let elementId = thisRemoveBtn.getAttribute("data-id")
      let elementColor = thisRemoveBtn.getAttribute("data-color")
      removeElementFromLocalStorage(elementId, elementColor)
    })
  })
}

// Modify quantity in cart
function changeQuantity() {
  let modifyQuantity = document.getElementsByClassName("itemQuantity")
  // console.log(modifyQuantity)

  Object.values(modifyQuantity).forEach(element => {
    element.addEventListener("change", function () {
      let thisModifyQuantity = element.closest("article")
      let elementId = thisModifyQuantity.getAttribute("data-id")
      let elementColor = thisModifyQuantity.getAttribute("data-color")

      let thisQuantityInput = element.closest("div > input")
      let newQuantityInput = thisQuantityInput.value
      console.log(newQuantityInput)
      changeQuantityFromLocalStorage(elementId, elementColor, newQuantityInput)
    })
  })
}

// Order form
// utiliser les RegEx pour vérifier que le formulaire est rempli correctement

// Define form elements
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let city = document.getElementById("city")
let address = document.getElementById("adress")
let email = document.getElementById("email")

// Define RegExp for elements
let namesRegExp = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/g
let addressregExp = /^[A-Za-z0-9]/g
let mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g




// Validate order
let orderBtn = document.getElementById("order")

orderBtn.addEventListener("click", function (event) {
  let firstNameErrorMsg = document.getElementById("firstNameErrorMsg")
  let formChecker = true
  if (firstName.value === "") {
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "champ vide"
    formChecker = false
  } else if (firstName.value.length < 2) {
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "Trop court"
    formChecker = false
  }
  console.log(email.value.match(mailRegExp))
  if (formChecker === false) {
    event.preventDefault()
  }

  const contact = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    email: email
  }

})
