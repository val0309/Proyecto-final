const btnCart = document.querySelector(".carrito")
const ContainerCartProducts =document.querySelector(".container-cart-products")

btnCart.addEventListener("click", () => {
    ContainerCartProducts.classList.toggle("hidden-cart")
})
