import './Results.scss';

import React, { Component } from 'react';

import FlightCard from '../flight-card';
import PropTypes from 'prop-types';

class Results extends Component {

  static propTypes = {
    flights: PropTypes.arrayOf(PropTypes.object),
  };

  // vai chegar props, com os dados da busca
  // renderizaremos os FlightCards
  render() {

    // const { flights } = this.props;

    return (
      <div className="results">
        <FlightCard />
      </div>
    );
  }
}

export default Results;
