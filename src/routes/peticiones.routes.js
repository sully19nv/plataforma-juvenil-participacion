const express = require("express");

const router = express.Router();

router.post("/generar", async (req, res) => {
  try {
    const datos = req.body;

    return res.json({
      ok: true,
      mensaje: "Solicitud recibida correctamente.",
      modo: "mock",
      estado: "pendiente_configuracion_n8n",
      linkDocumento: null,
      datosRecibidos: datos
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      ok: false,
      mensaje: "Error interno del servidor."
    });
  }
});

module.exports = router;