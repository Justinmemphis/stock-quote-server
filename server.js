const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const request = require('request');
const axios = require('axios');
require('dotenv').config();

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/quote', (req, res) => {
  console.log(req.query.symbol);
  const mySymbol = req.query.symbol;
  const key = process.env.REACT_APP_RAPID_API_KEY;
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    timeout: 5000,
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol: mySymbol,
      outputsize: 'full',
      datatype: 'json',
    },
	headers: {
		'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	  }
  };

  axios.request(options).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    res.json(error);
  });

});

const port = process.env.Port || 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
