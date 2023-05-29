const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;

  // Validate :id as a number
  if (isNaN(id)) {
    res.status(400).send('Invalid cart ID');
  } else {
    // Return payment methods for the cart
    res.send(`Payment methods for cart ${id}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost:${port}`);
});

module.exports = app;
