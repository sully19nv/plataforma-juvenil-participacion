const btnMensaje = document.getElementById('btnMensaje')
const mensajeClase = document.getElementById('mensajeClase')

btnMensaje.addEventListener('click', () => {
mensajeClase.textContent = '¡Hola! Este es un mensaje de alerta.'
})
