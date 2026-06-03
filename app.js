const btmMensaje  = document.getElementById('btmMensaje')
const mensajeClase = document.getElementById('mensajeClase')
btmMensaje.addEventListener('click',()=>{
    mensajeClase.textContent = '¡Hola! Este es un mensaje de alerta.'
    mensajeClase.textContent = 'el texto que quisimos mostrar'
})