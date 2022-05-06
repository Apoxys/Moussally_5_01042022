// Fetch les éléments dans l'API

// async function resAPI(){
// let productList= fetch ("http://localhost:3000/api/products")
// return (await productList).json;
// }


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
});

// Insertion des éléments dans le DOM
const insertElement = document.getElementById('items');



// Elements à insérer à chaque itération
/*<a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a>*/