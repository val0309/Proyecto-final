const btnCart = document.querySelector(".container-cart-icon");
const ContainerCartProducts =document.querySelector(
    ".container-cart-products"
);

btnCart.addEventListener("click", () => {
    ContainerCartProducts.classList.toggle("hidden-cart")
});

/*.......................*/
const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");

//lista de todos los contenedores de productos
const productsList = document.querySelector(".container-items");

//variable de arreglos de productos 
let allProducts = [];

const valorTotal = document.querySelector(".total-pagar");

const countProducts = document.querySelector("#contador-productos");




productsList.addEventListener("click", e => {

    if(e.target.classList.contains("btn-add-cart")) {
        const product = e.target.parentElement;
        
        const InfoProduct = {
            quantity: 1,
            title: product.querySelector("h3").textContent,
            price: product.querySelector("p").textContent,
        };

        const exist = allProducts.some(
            product => product.title === InfoProduct.title
        );
        
        if(exist) {
            const products = allProducts.map(product => {
                if (product.title === InfoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, InfoProduct];
        }
        
        showHTML();
    }

    
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// funcion para mostrar html
const showHTML = () => {

    // limpiar html
    rowProduct.innerHTML = "";

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement("div");
        containerProduct.classList.add("cart-product");

        containerProduct.innerHTML = `
        <div class="info-cart-products">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
    
        </div>
        <ion-icon name="close-outline" class="icon-close"></ion-icon>
        `;

        rowProduct.append(containerProduct);

        total =
                total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;

    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

};

