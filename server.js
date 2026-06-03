const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Permite leer JSON en POST
app.use(express.json());

/* =========================
   RUTAS DE ARCHIVOS
========================= */

// Ruta principal de candidatos (si la tienes en data)
const rutaCandidatos = path.join(__dirname, "data", "candidatos.json"); 

// Ruta de votos
const rutaVotos = path.join(__dirname, "data", "votos.json");


// CANDIDATOS
function leerCandidatos() {
  const data = fs.readFileSync(rutaCandidatos, "utf8");
  return JSON.parse(data);
}

function guardarCandidatos(candidatos) {
  fs.writeFileSync(rutaCandidatos, JSON.stringify(candidatos, null, 2));
}

// VOTOS
function leerVotos() {
  const data = fs.readFileSync(rutaVotos, "utf8");
  return JSON.parse(data);
}

function guardarVotos(votos) {
  fs.writeFileSync(rutaVotos, JSON.stringify(votos, null, 2));
}

/* =========================
   RUTAS DEL SERVIDOR
========================= */

// Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Ejemplo GET con parámetro
app.get("/api/votos", (req, res) => {
  const votos = leerVotos();
  res.json(votos);
});

// Ejemplo POST
app.post("/api/votos", (req, res) => {
  const identificacion = req.body;
  const candidato = req.body.candidato
  });

const votos = leerVotos()
const yaVoto = votos.find(function (voto) {
    return voto.identificacion === identificacion;
}
)

if (yaVoto) {
    res.status(400).json({ 
mensaje: "Esta identificacion ya registro un voto pedagogico"
     });
}
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});