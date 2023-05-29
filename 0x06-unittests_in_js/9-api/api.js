const express = require('express');
const app = express();

// Middleware to validate :id parameter as a number
const validateIdParam = (req, res, next) => {
  const id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.status(400).send('Invalid ID');
  }
  next();
};

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateIdParam, (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Start server
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost:${port}`);
});

module.exports = app;
