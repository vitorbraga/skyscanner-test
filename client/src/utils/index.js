const moment = require('moment');

const HOUR_LIMIT_SEARCH = 12;
const MONDAY = 1;
const DATE_FORMAT = 'YYYY-MM-DD';

const getNextMondayAndFollowing = () => {

  const today = new Date();

  // If today is Monday and current time is under 12:00, returns { today, tomorrow }
  if (today.getDay() === MONDAY && today.getHours() < HOUR_LIMIT_SEARCH) {
    const tomorrow = (new Date()).setDate(today.getDate() + 1);

    const fromDate = moment(today).format(DATE_FORMAT);
    const toDate = moment(tomorrow).format(DATE_FORMAT);
    return { fromDate, toDate };
  }

  // If today is not Monday, returns { nextMonday, nextTuesday }
  const nextMonday = new Date();
  nextMonday.setDate(nextMonday.getDate() + (1 + 7 - nextMonday.getDay()) % 7);
  const following = (new Date(nextMonday.getTime())).setDate(nextMonday.getDate() + 1);
  const fromDate = moment(nextMonday).format(DATE_FORMAT);
  const toDate = moment(following).format(DATE_FORMAT);

  return { fromDate, toDate };
}


const buildCurrentFlight = () => {

  const dates = getNextMondayAndFollowing();

  const flightInfo = {
    fromPlace: 'EDI',
    toPlace: 'LCY',
    adults: 2,
    class: 'Economy',
    fromDate: dates.fromDate,
    toDate: dates.toDate
  };

  return flightInfo;
};

const formatDateToView = (dateStr) => {
  return moment(dateStr).format('DD/MM/YYYY');
}

module.exports = {
  buildCurrentFlight,
  formatDateToView
};
