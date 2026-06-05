const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto 3000");
});