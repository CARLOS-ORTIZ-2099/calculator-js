const enlace = document.querySelector('a')
const message = document.querySelector('.message')

enlace.addEventListener('click', (enl) => {
     enl.preventDefault()  
     message.classList.toggle('show')

})
