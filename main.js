//Array de productos -- STOCK

const products = 
[
    {
        id: 1,
        name: 'Cat Cave',
        price: 42.50,
        quantity: 1,
        img: './assets/images/cat--cave.png'
    },
    {
        id: 2,
        name: 'Cat Travel Bag',
        price: 22,
        quantity: 1,
        img: './assets/images/cat--traveller.png'
    },
    {
        id: 3,
        name: 'Brown Collar for Dogs',
        price: 5.5,
        quantity: 1,
        img: './assets/images/dog--collar--brown.png'
    },
    {
        id: 4,
        name: 'Blue Collar for Dogs',
        price: 5.5,
        quantity: 1,
        img: './assets/images/dog--collar--blue.png'
    }
]

//FUNCION PARA RENDERIZAR PRODUCTOS

const displayProducts = (products) => {
    const containerProducts = document.getElementById('container-product');
    containerProducts.innerHTML = "";

    products.forEach((product) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                            <img src=${product.img}>  
                            <span class="card-title">${product.name}</span>
                            <a id=boton${product.id}><i>add_shopping_cart</i></a>
                            <div class="card-content">
                            <p>${product.price}</p>
                        </div>
                        `

        containerProducts.appendChild(div);
        const button = document.getElementById(`boton${product.id}`);
        button.addEventListener("click", () => {
            validateRepeatedProduct(product.id);
        });
    });
};

displayProducts(products)

//






