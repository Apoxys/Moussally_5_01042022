const productList = getProductsFromLocalStorage()

let totalOfItems = 0
let cartTotalPrice = 0

/**
 * Loop through localStorage
 */
for (const [id, colors] of Object.entries(productList)) {
  for (const [color, quantity] of Object.entries(colors)) {
    fetch("http://localhost:3000/api/products/" + id) // fetch based on each color for each id in localStorage
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
      .catch((err)=>{
        console.log(err)
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
      const cartNumberOfElements = document.getElementById("totalQuantity")
      const cartTotalPriceTextZone = document.getElementById("totalPrice")
      // update of items and prices
      totalOfItems += parseInt(quantity);
      console.log(totalOfItems)
      cartTotalPrice += product.price * quantity;
      cartNumberOfElements.innerHTML = parseInt(totalOfItems)
      console.log(cartTotalPrice)
      cartTotalPriceTextZone.innerHTML = cartTotalPrice
    }
  }
}

// Remove product from cart => see localStorage.js l53
function removeProduct() {
  let removeBtn = document.getElementsByClassName("deleteItem")

  Object.values(removeBtn).forEach(element => {
    element.addEventListener("click", function () {
      let thisRemoveBtn = element.closest("article")
      let elementId = thisRemoveBtn.getAttribute("data-id")
      let elementColor = thisRemoveBtn.getAttribute("data-color")
      removeElementFromLocalStorage(elementId, elementColor)
    })
  })
}

// Modify quantity in cart => see localStorage.js l72
function changeQuantity() {
  let modifyQuantity = document.getElementsByClassName("itemQuantity")

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


// ORDER FORM
// Define form elements
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let address = document.getElementById("address")
let city = document.getElementById("city")
let email = document.getElementById("email")

// Define RegExp for elements
let namesRegExp = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/g
let addressregExp = /^[A-Za-z0-9]/g
let mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

// Validate order
let orderBtn = document.getElementById("order")

orderBtn.addEventListener("click", function (event) {
  event.preventDefault()
  let formChecker = 0

  // Checking the form
  // Checking first Name
  let firstNameErrorMsg = document.getElementById("firstNameErrorMsg")
  if (firstName.value === "") {
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "Champ vide"
  } else if (firstName.value.length < 3) {
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "Trop court" 
  } else if (firstName.value.match(namesRegExp) === null) {
    firstName.style.border = "red 1px solid"
    firstNameErrorMsg.innerHTML = "Prénom incorrect"

  } else {
    formChecker++
    firstName.style.border = ""
    firstNameErrorMsg.innerHTML = ""
  }

  // Checking last Name 
  let lastNameErrorMsg = document.getElementById("lastNameErrorMsg")
  if (lastName.value === "") {
    lastName.style.border = "red 1px solid"
    lastNameErrorMsg.innerHTML = "Champ vide"
  } else if (lastName.value.length < 3) {
    lastName.style.border = "red 1px solid"
    lastNameErrorMsg.innerHTML = "Trop court"
  } else if (lastName.value.match(namesRegExp) === null) {
    lastName.style.border = "red 1px solid"
    lastNameErrorMsg.innerHTML = "Nom incorrect"

  } else {
    formChecker++
    lastName.style.border = ""
    lastNameErrorMsg.innerHTML = ""
  }

  // Checking address
  let addressErrorMsg = document.getElementById("addressErrorMsg")
  if (address.value === "") {
    address.style.border = "red 1px solid"
    addressErrorMsg.innerHTML = "Champ vide"
  } else if (address.value.length < 3) {
    address.style.border = "red 1px solid"
    addressErrorMsg.innerHTML = "Trop court"
  } else if (address.value.match(addressregExp) === null) {
    address.style.border = "red 1px solid"
    addressErrorMsg.innerHTML = "Adresse incorrecte"

  } else {
    formChecker++
    address.style.border = ""
    addressErrorMsg.innerHTML = ""
  }

  // Checking city
  let cityErrorMsg = document.getElementById("cityErrorMsg")
  if (city.value === "") {
    city.style.border = "red 1px solid"
    cityErrorMsg.innerHTML = "Champ vide"
  } else if (city.value.length < 3) {
    city.style.border = "red 1px solid"
    cityErrorMsg.innerHTML = "Trop court"
  } else if (city.value.match(namesRegExp) === null) {
    city.style.border = "red 1px solid"
    cityErrorMsg.innerHTML = "Nom de ville incorrect"

  } else {
    formChecker++
    city.style.border = ""
    cityErrorMsg.innerHTML = ""
  }

  // Checking email
  let emailErrorMsg = document.getElementById("emailErrorMsg")
  if (email.value === "") {
    email.style.border = "red 1px solid"
    emailErrorMsg.innerHTML = "Champ vide"
  } else if (email.value.length < 3) {
    email.style.border = "red 1px solid"
    emailErrorMsg.innerHTML = "Trop court"
  } else if (email.value.match(mailRegExp) === null) {
    email.style.border = "red 1px solid"
    emailErrorMsg.innerHTML = "Adresse mail incorrecte"

  } else {
    formChecker++
    email.style.border = ""
    emailErrorMsg.innerHTML = ""
  }

  // overAll check and define objects to use in order
  if (formChecker != 5) {
    event.preventDefault()
    window.alert("Vérifiez le formulaire, une erreur a du s'y glisser !")
  } else {

    const contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value
    }

    const productsToBuy = []
    for (let [id] of Object.entries(productList)) {
      productsToBuy.push([id])
    }
    sendOrder(contact, productsToBuy)
  }
})

