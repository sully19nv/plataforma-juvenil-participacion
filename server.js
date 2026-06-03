const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// SERVIR ARCHIVOS FRONTEND (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// ARCHIVOS JSON
const rutaCandidatos = path.join(__dirname, "data", "candidatos.json");
const rutaVotos = path.join(__dirname, "data", "votos.json");

// LEER/ESCRIBIR CANDIDATOS
function leerCandidatos() {
  return JSON.parse(fs.readFileSync(rutaCandidatos, "utf8"));
}

// LEER/ESCRIBIR VOTOS
function leerVotos() {
  return JSON.parse(fs.readFileSync(rutaVotos, "utf8"));
}

function guardarVotos(votos) {
  fs.writeFileSync(rutaVotos, JSON.stringify(votos, null, 2));
}

/* ======================
   API
====================== */

// OBLIGATORIO para tu HTML
app.get("/api/candidatos", (req, res) => {
  try {
    const data = leerCandidatos();
    res.json(data);
  } catch (error) {
    res.json([]);
  }
});

app.get("/api/votos", (req, res) => {
  try {
    const data = leerVotos();
    res.json(data);
  } catch (error) {
    res.json([]);
  }
});

app.post("/api/votos", (req, res) => {
  const { identificacion, candidato } = req.body;

  const votos = leerVotos();

  const yaVoto = votos.find(v => v.identificacion === identificacion);

  if (yaVoto) {
    return res.status(400).json({
      mensaje: "Esta identificación ya registró un voto pedagógico"
    });
  }

  const nuevoVoto = {
    identificacion,
    candidato,
    fecha: new Date().toISOString()
  };

  votos.push(nuevoVoto);
  guardarVotos(votos);

  res.json({ mensaje: "Voto registrado correctamente" });
});

/* ======================
   INICIAR SERVIDOR
====================== */

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});