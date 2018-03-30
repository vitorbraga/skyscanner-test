import './Flights.scss';

import React, { Component } from 'react';

import Loading from '../loading';
import PropTypes from 'prop-types';
import Results from '../results';
import { formatDateToView } from '../../utils';

class Flights extends Component {

  static propTypes = {
    loading: PropTypes.bool,
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

    const { loading, flights, flightInfo } = this.props;
    const fromDate = formatDateToView(flightInfo.fromDate);
    const toDate = formatDateToView(flightInfo.toDate);

    return (
      <div className="flights">
        <div className="flights__header">
          Flights from {fromDate} to {toDate}
        </div>
        {/* <Loading /> */}
        {loading ? <Loading /> : <Results flights={flights} />}
      </div>
    );
  }
}

export default Flights;
