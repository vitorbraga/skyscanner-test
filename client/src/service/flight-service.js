import axios from 'axios';

const URL = `${process.env.SERVER_HOST}/api/search`;

const buildURL = (p) => {
  return `${URL}?adults=${p.adults}&class=${p.class}&fromPlace=${p.fromPlace}&` +
    `fromDate=${p.fromDate}&toPlace=${p.toPlace}&toDate=${p.toDate}`;
}

const searchFlights = (flightInfo) => new Promise(
  (resolve, reject) => {
    axios.get(buildURL(flightInfo))
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });

module.exports = searchFlights;
