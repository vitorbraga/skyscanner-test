import './Results.scss';

import React, { Component } from 'react';

import FlightCard from '../flight-card';

class Results extends Component {

  // vai chegar props, com os dados da busca
  // renderizaremos os FlightCards
  render() {
    return (
      <div className="results">
        <FlightCard />
      </div>
    );
  }
}

export default Results;
