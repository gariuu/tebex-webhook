const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/webhook', (req, res) => {
  const body = req.body;

  console.log('--- Webhook recibido ---');
  console.log(JSON.stringify(body, null, 2));

  // Si es una validación, responder con el mismo ID
  if (body.type === 'validation.webhook' && body.id) {
    console.log('Recibí webhook de validación');
    return res.status(200).json({ id: body.id });
  }

  // Si es un webhook normal, responder con status OK
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
