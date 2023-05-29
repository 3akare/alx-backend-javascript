const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// GET /available_payments endpoint
app.get('/available_payments', (_req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

// POST /login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start server
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost:${port}`);
});

module.exports = app;
