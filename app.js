const btnMensaje = document.getElementById('btnMensaje')
const mensajeClase = document.getElementById('mensajeClase')

let contadorDeClicks = 0

btnMensaje.addEventListener('click', () => {
contadorDeClicks++

mensajeClase.textContent =
`El texto que quisimos mostrar. Número de clics: ${contadorDeClicks}`


})
