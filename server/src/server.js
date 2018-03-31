require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');
const validateSearch = require('./validation');
const { buildSearchResponse } = require('./utils');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {

  const valid = validateSearch(req.query);
  if (valid) {
    return res.json({ error: true, message: `Invalid parameter ${valid}` });
  }

  api.livePricing.search(req.query)
    .then((results) => {
      const flights = buildSearchResponse(results);
      res.json(flights);
    })
    .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});

