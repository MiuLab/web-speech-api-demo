const express = require('express');
const path = require('path');
const app = express();
const portNumber = 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(portNumber, () => {
  console.log(`server is running on port: ${portNumber}`);
});