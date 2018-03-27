require('isomorphic-fetch');
require('es6-promise').polyfill();
const _ = require('lodash');

const express = require('express');
const app = express();
const api = require('./api/');
const validateSearch = require('./validation');
const utils = require('./utils');

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

      const itineraries = _.take(results.Itineraries, utils.MAX_ITEMS);
      const flights = [];

      itineraries.forEach(it => {
        const price = Math.ceil(it.PricingOptions[0].Price);
        const agent = utils.findById(it.PricingOptions[0].Agents[0], results.Agents);

        // Outbound Leg
        const outboundLeg = utils.findById(it.OutboundLegId, results.Legs);
        const outboundCarrier = utils.findById(outboundLeg.Carriers[0], results.Carriers);
        const outboundOriginStation = utils.findById(outboundLeg.OriginStation, results.Places);
        const outboundDestinationStation = utils.findById(outboundLeg.DestinationStation, results.Places);

        // Inbound Leg
        const inboundLeg = utils.findById(it.InboundLegId, results.Legs);
        const inboundCarrier = utils.findById(inboundLeg.Carriers[0], results.Carriers);
        const inboundOriginStation = utils.findById(inboundLeg.OriginStation, results.Places);
        const inboundDestinationStation = utils.findById(inboundLeg.DestinationStation, results.Places);

        const fl = {
          price,
          agent: agent.Name,
          outbound: {
            departureTime: outboundLeg.Departure.substring(11, 16),
            arrivalTime: outboundLeg.Arrival.substring(11, 16),
            duration: utils.convertTime(outboundLeg.Duration),
            stops: outboundLeg.Stops.length,
            carrier: {
              name: outboundCarrier.Name,
              imageUrl: outboundCarrier.ImageUrl
            },
            originStation: outboundOriginStation.Code,
            destinationStation: outboundDestinationStation.Code
          },
          inbound: {
            departureTime: inboundLeg.Departure.substring(11, 16),
            arrivalTime: inboundLeg.Arrival.substring(11, 16),
            duration: utils.convertTime(inboundLeg.Duration),
            stops: inboundLeg.Stops.length,
            carrier: {
              name: inboundCarrier.Name,
              imageUrl: inboundCarrier.ImageUrl
            },
            originStation: inboundOriginStation.Code,
            destinationStation: inboundDestinationStation.Code
          }
        }

        flights.push(fl);
      });

      res.json(flights);
    })
    .catch(console.error);
});



app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});

