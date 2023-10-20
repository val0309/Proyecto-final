const loginform = document.querySelector('#loginform')
loginform.addEventListener('submit', (e)=>{
   e.preventDefault()
   const email = document.querySelector('#email').value
   const password = document.querySelector('#password').value
   const users = JSON.parse(localStorage.getItem('users')) || []
   const validuser = users.find(user => user.email === email && user.password === password)
   if(!validuser){
      return alert ('usuario y/o contraseña incorrectos!!')

   }
   alert('bienvenido ${validuser.name}')
   window.location.href= 'index.html'

})
