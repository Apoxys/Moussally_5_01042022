let urlparams = (new URL(location)).searchParams;
let idOfProduct = urlparams.get('id');

fetch("http://localhost:3000/api/products/" + idOfProduct) // fetch for this product's JSON
    .then(function (response) {
        if (response.ok) {
            response.json()
                .then(function (product) {
                    fillDom(product);
                    fillOptions(product.colors);

                    // Define listened tags
                    const selectTag = document.getElementById('colors')
                    const inputQuantity = document.getElementById('quantity')
                    const btnAddProduct = document.getElementById('addToCart');

                    // Btnclick listener to add to cart and update
                    btnAddProduct.addEventListener("click", function () {
                        let chosenColor = selectTag.value
                        let chosenQuantity = inputQuantity.value
                        if (chosenQuantity >= 1 && chosenQuantity <= 100) {
                            if (chosenColor === "") {
                                window.alert("Veuillez choisir une couleur")
                            } else {
                                window.alert(`Vous avez choisi ${chosenQuantity} modèle(s) de notre ${product.name} dans sa teinte ${chosenColor}`)
                                addToCart(idOfProduct, chosenColor, chosenQuantity)
                            }
                        } else {
                            window.alert("Veuillez choisir une quantité valide")
                        }
                    })
                })
        }
    })
    .catch(function (Error) {
        console.log("An error has occured : " + Error);
    });

/**
 * filling DOM function
 * @param {object} product 
 */
function fillDom(product) {
    // <title>
    let titleTagOfProduct = document.getElementsByTagName("title")[0];
    titleTagOfProduct.innerHTML = product.name;

    // img
    let imgContainer = document.querySelector(".item__img");
    let imgOfProduct = document.createElement("img");
    imgContainer.appendChild(imgOfProduct);

    imgOfProduct.src = product.imageUrl;
    imgOfProduct.alt = product.altTxt;
    // h1 title
    let h1OfProduct = document.getElementById("title");
    h1OfProduct.innerHTML = product.name;
    // price
    let priceOfProduct = document.getElementById("price");
    priceOfProduct.innerHTML = product.price;
    // description
    let descriptionOfProduct = document.getElementById("description")
    descriptionOfProduct.innerHTML = product.description

};

/**
 * Create an option for each color in [colors]
 * @param {string} colors 
 */
function fillOptions(colors) {
    let selectTag = document.getElementById("colors")

    for (let color of colors) {
        let option = document.createElement("option")
        option.value = color
        option.innerHTML = color
        selectTag.appendChild(option)
    }
};



