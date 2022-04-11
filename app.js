const express = require('express');
const app = express();
const isEvenOrOdd = require('./utils');

app.get('/', function (req, res) {
  console.log('GET Request Received');
  res.send(isEvenOrOdd());
});

app.listen(3000, () => console.log('Listening on port 3000!'));
