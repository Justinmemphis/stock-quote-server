const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.Port || 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
