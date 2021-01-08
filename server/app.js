const express = require('express');
const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/details', (req, res) => {
  res.send('Hello from detail page!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
