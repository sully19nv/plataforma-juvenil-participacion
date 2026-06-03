const btnMensaje = document.getElementById('btnMensaje')
const mensajeClase = document.getElementById('mensajeClase')
const botonesperfil = document.querySelectorAll('.btnPerfil')
const detallePerfil = document.getElementById('detallePerfil')

let contadorDeClicks = 0

btnMensaje.addEventListener('click', () => {
contadorDeClicks++

mensajeClase.textContent =
`El texto que quisimos mostrar. Número de clics: ${contadorDeClicks}`


})

botonesperfil.forEach(boton => {
    boton.addEventListener('click',() => {
     const perfil = boton.getAttribute('data-perfil')
     detallePerfil.innerHTML = `<h3>${perfil}</h3><p>Información sobre el perfil ${perfil}.</p>`
    })
})