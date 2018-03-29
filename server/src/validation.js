const _ = require('lodash');

const CABIN_CLASS_VALUES = ['Economy', 'PremiumEconomy', 'Business', 'First'];

const validateDates = (from, to) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  if (fromDate < new Date()) {
    return false;
  }

  if (fromDate >= toDate) {
    return false;
  }

  return true;
}

const validateSearch = (query) => {

  if (_.isNil(query.class) ||
    CABIN_CLASS_VALUES.indexOf(query.class) === -1) {
    return 'class';
  }

  if (_.isNil(query.fromDate)) {
    return 'fromDate';
  }

  if (_.isNil(query.toDate)) {
    return 'toDate';
  }

  if (!validateDates(query.fromDate, query.toDate)) {
    return 'dates not eligible'
  }

  if (_.isNil(query.fromPlace)) {

    return 'fromPlace';
  }

  if (_.isNil(query.toPlace)) {
    return 'toPlace';
  }

  if (_.isNil(query.adults) ||
    parseInt(query.adults, 10) < 1 || parseInt(query.adults, 10) > 8) {
    return 'adults';
  }

  return undefined;
}

module.exports = validateSearch;
