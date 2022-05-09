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
    let link = document.createElement("a");
    link.href="../html/product.html?id="+element._id; /*not functionnal*/
    insertElements.appendChild(link);
    console.log (element._id);
    
    // article
    let article = document.createElement ("article");
    link.appendChild(article);
    
    // img
    let image = document.createElement("img");
    image.src = element.imageUrl;
    image.alt = element.altTxt;
    article.appendChild(image);
    
    // h3 title
    let title = document.createElement("h3");
    title.classList.add ("productName");
    title.innerHTML=element.name;
    article.appendChild(title);
    
    // p text
    let text = document.createElement ("p");
    text.classList.add("productDescription");
    text.innerHTML=element.description;
    article.appendChild(text);
    }
};