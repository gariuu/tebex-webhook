const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Webhook handler
app.post('/webhook', (req, res) => {
  console.log('Datos recibidos en /webhook:');
  console.log(req.body);

  res.sendStatus(200); // OK
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
