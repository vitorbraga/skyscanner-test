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

    return (
      <div>
        {loading ? <Loading /> : <Results flights={flights} />}
      </div>
    );
  }
}

export default Flights;
