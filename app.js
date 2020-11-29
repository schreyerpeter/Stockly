const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
