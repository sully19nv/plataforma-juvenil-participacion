const botones = document.querySelectorAll(".btnPerfil");
const detalle = document.getElementById("detallePerfil");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const perfil = boton.getAttribute("data-perfil");

    let info = "";

    if (perfil === "Transparencia Juvenil") {
      info = "Este perfil promueve la transparencia, la participación juvenil y la trazabilidad.";
    }

    if (perfil === "Comunidad Digital") {
      info = "Este perfil impulsa el uso responsable de herramientas digitales en la comunidad.";
    }

    if (perfil === "Derechos y Participación") {
      info = "Este perfil defiende el cuidado de datos, derechos y participación informada.";
    }

    detalle.innerHTML = `<h3>${perfil}</h3><p>${info}</p>`;
  });
});

