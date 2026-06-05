import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});