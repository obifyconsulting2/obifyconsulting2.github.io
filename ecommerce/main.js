async function loadProducts() {
    let res = await fetch('https://obifyconsulting2.github.io/json/products.json');
    let products = await res.json();
    console.log(products);
}

loadProducts();