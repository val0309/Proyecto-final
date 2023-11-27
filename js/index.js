const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'inicio.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'inicio.html'
})









const infoUsuario = document.getElementById("usuario");

function MostrarNombre() {
  UsuarioLogueado = localStorage.getItem("login_success");
  if (UsuarioLogueado) {
    const p = document.createElement("p");
    const user = JSON.parse(UsuarioLogueado);
    p.textContent = user.name;
    infoUsuario.appendChild(p);
        
    

    //boton de logout aparecer
    const logout = document.getElementById("logout");
    
    logout.addEventListener("click", () => {
      p.textContent = "";
     
      localStorage.removeItem("login_success");
      
      
    });
  }
}

MostrarNombre();













//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });

  //tienda submenu
  const btntienda = document.querySelector(".shpp");
const shoppcontainer =document.querySelector(
    ".shpp"
);
btntienda.addEventListener("click", () => {
  shoppcontainer.classList.toggle("shhpp")
});



// // nombre localstorage
// const infousuario = document.getElementById("usuario");
// function mostrarNombreUsuario (){



