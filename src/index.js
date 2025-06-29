const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send('Missing parameters');
  res.send(`Result: ${parseFloat(a) + parseFloat(b)}`);
});

app.get('/hello', (req, res) => {
  res.send('Hello world!');
});

app.get('/status', (req, res) => {
  res.send({ status: 'ok' });
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;
