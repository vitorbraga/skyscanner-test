import React, { Component } from 'react';

import Loading from '../loading';
import PropTypes from 'prop-types';
import Results from '../results';

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

    const { loading, flights } = this.props;

    const test = {
      price: 169.98,
      agent: 'flybe',
      outbound: {
        departureTime: '16:55',
        arrivalTime: '18:45',
        duration: 110,
        stops: 0,
        carrier: {
          name: 'Flybe',
          imageUrl: 'http://s1.apideeplink.com/images/airlines/BE.png'
        },
        originStation: 'EDI',
        destinationStation: 'LCY'
      },
      inbound: {
        departureTime: '08:50',
        arrivalTime: '10:20',
        duration: 90,
        stops: 0,
        carrier: {
          name: 'Flybe',
          imageUrl: 'http://s1.apideeplink.com/images/airlines/BE.png'
        },
        originStation: 'LCY',
        destinationStation: 'EDI'
      }
    };

    return (
      <div>
        {/* <Results flights={[test]} /> */}
        {loading ? <Loading /> : <Results flights={flights} />}
      </div>
    );
  }
}

export default Flights;
