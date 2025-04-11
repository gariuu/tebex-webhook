const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('--- Webhook recibido ---');

  // Loguear headers por si Tebex manda algo especial
  console.log('Headers:');
  console.log(JSON.stringify(req.headers, null, 2));

  // Loguear el body completo
  console.log('Body:');
  console.log(JSON.stringify(req.body, null, 2));

  // Responder 200 OK para que Tebex lo valide
  res.sendStatus(200);

  console.log('Respondí con 200 OK');
  console.log('-------------------------');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
