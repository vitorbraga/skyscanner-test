require('isomorphic-fetch');
require('es6-promise').polyfill();
const _ = require('lodash');

const express = require('express');
const app = express();
const api = require('./api/');
const validateSearch = require('./validation');

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

  TODO: client should provide params

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {

  const valid = validateSearch(req.query);
  if (valid) {
    return res.json({ error: true, message: `Invalid parameter ${valid}` });
  }

  const flight = {
    price: 230,
    departure: {
      carrier: '',
      leaveTime: '',
      arriveTime: '',
      duration: 90,
      stops: 0,
    },
    arrival: {
      carrier: '',
      leaveTime: '',
      arriveTime: '',
      duration: 90,
      stops: 0,
    }
  }

  const findById = (id, array) => {
    return array.find(item => item.Id === id);
  }

  const findCarrier = (id, array) => {

  }

  api.livePricing.search(req.query)
    .then((results) => {

      const itineraries = _.take(results.Itineraries, 20);
      const flights = [];

      itineraries.forEach(it => {
        const price = it.PricingOptions[0].Price;
        const agent = findById(it.PricingOptions[0].Agents[0], results.Agents);

        // Outbound Leg
        const outboundLeg = findById(it.OutboundLegId, results.Legs);
        const outboundCarrier = findById(outboundLeg.Carriers[0], results.Carriers);
        const outboundOriginStation = findById(outboundLeg.OriginStation, results.Places);
        const outboundDestinationStation = findById(outboundLeg.DestinationStation, results.Places);

        // Inbound Leg
        const inboundLeg = findById(it.InboundLegId, results.Legs);
        const inboundCarrier = findById(inboundLeg.Carriers[0], results.Carriers);
        const inboundOriginStation = findById(inboundLeg.OriginStation, results.Places);
        const inboundDestinationStation = findById(inboundLeg.DestinationStation, results.Places);

        const fl = {
          price,
          agent: agent.Name,
          outbound: {
            departureTime: outboundLeg.Departure.substring(11, 16),
            arrivalTime: outboundLeg.Arrival.substring(11, 16),
            duration: outboundLeg.Duration,
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
            duration: inboundLeg.Duration,
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

