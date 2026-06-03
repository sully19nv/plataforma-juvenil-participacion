const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // IMPORTANTE para abrir HTML

// ===== RUTAS DE ARCHIVOS =====
const rutaCandidatos = path.join(__dirname, "data", "candidatos.json");
const rutaVotos = path.join(__dirname, "data", "votos.json");

// ===== CANDIDATOS =====
function leerCandidatos() {
  const data = fs.readFileSync(rutaCandidatos, "utf8");
  return JSON.parse(data);
}

// 🔥 ESTA ES LA RUTA QUE TE FALTA
app.get("/api/candidatos", (req, res) => {
  const candidatos = leerCandidatos();
  res.json(candidatos);
});

// ===== VOTOS =====
function leerVotos() {
  const data = fs.readFileSync(rutaVotos, "utf8");
  return JSON.parse(data);
}

function guardarVotos(votos) {
  fs.writeFileSync(rutaVotos, JSON.stringify(votos, null, 2));
}

// GET votos
app.get("/api/votos", (req, res) => {
  const votos = leerVotos();
  res.json(votos);
});

// POST votos
app.post("/api/votos", (req, res) => {
  const { identificacion, candidato } = req.body;

  if (!identificacion || !candidato) {
    return res.status(400).json({
      mensaje: "Faltan datos"
    });
  }

  const votos = leerVotos();

  const yaVoto = votos.find(v => v.identificacion === identificacion);

  if (yaVoto) {
    return res.status(400).json({
      mensaje: "Esta identificación ya votó"
    });
  }

  const nuevoVoto = {
    id: Date.now(),
    identificacion,
    candidato,
    fecha: new Date().toISOString()
  };

  votos.push(nuevoVoto);
  guardarVotos(votos);

  res.status(201).json({
    mensaje: "Voto registrado correctamente",
    voto: nuevoVoto
  });
});app.get("/api/candidatos", (req, res) => {
  res.json([
    { nombre: "Prueba", rol: "test" }
  ]);
});



// ===== INICIO SERVIDOR =====
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});