// Fetch les éléments dans l'API

fetch ("http://localhost:3000/api/products")
.then(function(promise){
    if (promise.ok){
        return promise.json();        
    }  
})
.then (function(promise){
    console.log (promise);
})
.catch (function(Error){
    console.log ("An error has occured");
})


// Insertion des éléments dans le DOM
function fillingPresentation (){
    // Base Structure
    const insertElements = document.getElementById('items')
    let link = document.createElement("a");
    link.href="../html/product.html";
    insertElements.appendChild(link);
    
    let article = document.createElement ("article");
    link.appendChild(article);
    
    // img
    let image = document.createElement("img");
    image.src = "../../back/images/kanap01.jpeg";
    article.appendChild(image);
    
    // h3 title
    let title = document.createElement("h3");
    title.classList.add ("productName");
    title.innerHTML="Kanap Name";
    article.appendChild(title);
    
    // p text
    let text = document.createElement ("p");
    text.classList.add("prodcutDescription");
    text.innerHTML="Description";
    article.appendChild(text);
};

fillingPresentation();

console.log(JSON);

// Elements à insérer à chaque itération
/*<a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a>*/