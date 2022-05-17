// getlocalStorage
const productList = getProductsFromLocalStorage()

for (const [id, colors] of Object.entries(productList)) {
    console.log(id);

    for (const [color, quantity] of Object.entries(colors)) {
        console.log(color);
        // fetch based on id l5
            // fillDom
        // localStorage.json
    }
}