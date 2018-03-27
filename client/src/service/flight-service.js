import axios from 'axios';

const url = 'http://localhost:4000/api/search?adults=1&class=' +
  'Economy&fromPlace=EDI&fromDate=2018-03-28&toPlace=LCY&toDate=2018-03-29';

const searchFlights = new Promise(
  (resolve, reject) => {
    axios.get(url)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });

module.exports = searchFlights;
