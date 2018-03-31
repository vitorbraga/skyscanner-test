const _ = require('lodash');

const MAX_ITEMS = 40;

const findById = (id, array) => {
  return array.find(item => item.Id === id);
}

const convertTime = (minutes) => {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}`;
}

const buildSearchResponse = (results) => {
  const itineraries = _.take(results.Itineraries, MAX_ITEMS);
  const flights = [];

  itineraries.forEach(it => {
    const price = Math.ceil(it.PricingOptions[0].Price);
    const agent = findById(it.PricingOptions[0].Agents[0], results.Agents);
    const link = it.PricingOptions[0].DeeplinkUrl;

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
      link,
      outbound: {
        departureTime: outboundLeg.Departure.substring(11, 16),
        arrivalTime: outboundLeg.Arrival.substring(11, 16),
        duration: convertTime(outboundLeg.Duration),
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
        duration: convertTime(inboundLeg.Duration),
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

  return flights;
}

module.exports = {
  buildSearchResponse
}
