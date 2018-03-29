const _ = require('lodash');

const CABIN_CLASS_VALUES = ['Economy', 'PremiumEconomy', 'Business', 'First'];

const validateFromDate = (fromDate) => {
  const today = new Date();
  if (parseInt(fromDate.substring(8, 10), 10) < today.getDate()) {
    return false;
  }
  return true;
};

const validateToDate = (toDate) => {
  const today = new Date();
  if (parseInt(toDate.substring(8, 10), 10) < (today.getDate() + 1)) {
    return false;
  }
  return true;
};

const validateSearch = (query) => {

  if (_.isNil(query.class) ||
    CABIN_CLASS_VALUES.indexOf(query.class) === -1) {
    return 'class';
  }

  // FIXME

  // if (_.isNil(query.fromDate) || !validateFromDate(query.fromDate)) {
  //   return 'fromDate';
  // }

  // if (_.isNil(query.toDate) || !validateToDate(query.toDate)) {
  //   return 'toDate';
  // }

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
