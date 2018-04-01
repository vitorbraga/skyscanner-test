import './Flights.scss';

import React, { Component } from 'react';

import Loading from '../loading';
import PropTypes from 'prop-types';
import Results from '../results';
import { formatDateToView } from '../../utils';

class Flights extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    errorLoading: PropTypes.bool,
    flights: PropTypes.arrayOf(PropTypes.object),
    searchFlights: PropTypes.func,
    startLoading: PropTypes.func
  };

  constructor(props, context) {
    super(props);
  }

  componentDidMount() {
    this.props.startLoading();
    this.props.searchFlights();
  }

  render() {

    const { loading, flights, flightInfo, errorLoading } = this.props;
    const fromDate = formatDateToView(flightInfo.fromDate);
    const toDate = formatDateToView(flightInfo.toDate);

    // Here I could've used recompose's branch method, but I thought
    // adding some lib just to cover this case would not be valuable.
    if (errorLoading) {
      return (
        <div className="flights">
          <div className="flights__header">
            Flights from {fromDate} to {toDate}
          </div>
          <span className="error-loading">Some error occurred. Please reload the page to try again.</span>
        </div>
      );
    }

    return (
      <div className="flights">
        <div className="flights__header">
          Flights from {fromDate} to {toDate}
        </div>
        {loading ? <Loading error={errorLoading} /> : <Results flights={flights} />}
      </div>
    );
  }
}

export default Flights;
