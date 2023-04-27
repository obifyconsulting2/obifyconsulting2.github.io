async function loadProducts() {
    let res = await fetch('https://obifyconsulting2.github.io/json/products.json');
    let products = await res.json();
    let markup = "<ul>";
    for (let i = 0; i < products.list.length; i++) {
        markup = markup + `<li>${products.list[i].title}</li>`
    }
    markup = markup + "</ul>";
    document.querySelector("#products").innerHTML = markup;
    console.log(products);
}

loadProducts();