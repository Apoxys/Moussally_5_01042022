// (product) will be the fetch result

// define <title>
document
    .getElementsByTagName("title")
    .innerHTML = product.name

// filling DOM function
function fillDom(product){
// img
document
    .getElementsByClassName("item__img")
    .createElement("img")
    .appendChild(img)
    img.src = product.imageUrl
    img.alt = product.altTxt
// h1 title
    document
        .getElementById("title")
        .innerHTML = product.name
// price
    document
        .getElementById("price")
        .innerHTML = product.price
// description
    document
        .getElementById("description")
        .innerHTML = product.description
};

function fillOptions(product){
    let selectTag = document.getElementById("colors")
    let optionsTag = selectTag.nextElementSibling

    for (let option of colors ){       
    document.createElement("option")
    optionsTag.appendChild(option)
    option.value = product.colors
    option.innerHTML = product.colors
}
}

