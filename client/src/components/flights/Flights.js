import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Results from '../results';

class Flights extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    flights: PropTypes.arrayOf(PropTypes.object),
    fetchFlights: PropTypes.func,
    startLoading: PropTypes.func
  };

  constructor(props, context) {
    super(props);
  }

  componentDidMount() {
    this.props.startLoading();
  }


  render() {

    const { loading, flights } = this.props;
    // console.log('Flights');
    // console.log(this.props.loading)
    return (
      <div>
        <Results flights={flights} loading={loading} />
      </div>
    );
  }
}

export default Flights;
