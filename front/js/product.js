// Define idOfProduct with current URL
console.log(location);//checking location
let urlparams = (new URL(location)).searchParams;
let idOfProduct = urlparams.get('id');
console.log(idOfProduct);//checking id

// fetch for this product's JSON
fetch ("http://localhost:3000/api/products/"+idOfProduct)
.then(function(response){
    if (response.ok){
        response.json()
        .then(function(content){           
            console.log (content);//checking result
            fillDom(content);
            fillOptions(content.colors);
            console.log (content.name)      
        })
    }
})
.catch (function(Error){
    console.log ("An error has occured : "+Error);
});

// let titleTagOfProduct = document.getElementsByTagName("title")[0];
/**
 * filling DOM function
 * @param {*} product 
 */

function fillDom(product){
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
 * @param {*} colors 
 */
function fillOptions(colors){
    let selectTag = document.getElementById("colors")

    for (let color of colors){       
        let option = document.createElement("option") 
        option.value = color
        option.innerHTML = color
        selectTag.appendChild(option)
    }
};



