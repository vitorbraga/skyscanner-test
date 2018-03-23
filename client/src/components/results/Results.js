import './Results.scss';

import React, { Component } from 'react';

import FlightCard from '../flight-card';
import PropTypes from 'prop-types';

class Results extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    flights: PropTypes.arrayOf(PropTypes.object),
  };

  // vai chegar props, com os dados da busca
  // renderizaremos os FlightCards
  render() {

    const { loading, flights } = this.props;

    return (
      <div className="results">
        {loading ? 'Loading' : 'Not loading'}
        <FlightCard />
      </div>
    );
  }
}

export default Results;
