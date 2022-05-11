// Fetch les éléments dans l'API
fetch ("http://localhost:3000/api/products")
.then(function(response){
    if (response.ok){
        response.json()
        .then(function(content){
            fillingPresentation(content);
        })
    }
})
.catch (function(Error){
    console.log ("An error has occured : "+Error);
})

// Insertion des éléments dans le DOM
function fillingPresentation (products){

    for (let element of products){
    // a
    const insertElements = document.getElementById('items')
    insertElements.innerHTML += `<a href="product.html?id=${element._id}">
    <article>
      <img src="${element.imageUrl}" alt="${element.altTxt}">
      <h3 class="productName">${element.name}</h3>
      <p class="productDescription">${element.description}</p>
    </article>
   </a>`
    }
};