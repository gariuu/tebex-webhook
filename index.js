const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir requests desde el navegador (Hoppscotch, etc.)
app.use(cors());

// Permitir recibir JSON
app.use(express.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Datos recibidos en /webhook:');
  console.log(req.body);

  res.sendStatus(200); // OK
  console.log('Respondí con 200 OK');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
