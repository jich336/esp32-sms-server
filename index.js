
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let ultimoMensaje = "";

app.post('/api/mensaje', (req, res) => {
  const { mensaje } = req.body;
  if (mensaje) {
    ultimoMensaje = mensaje;
    console.log("Mensaje recibido:", mensaje);
    res.json({ ok: true, mensaje: "Mensaje recibido" });
  } else {
    res.status(400).json({ ok: false, error: "Falta el mensaje" });
  }
});

app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: ultimoMensaje });
  ultimoMensaje = "";
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
