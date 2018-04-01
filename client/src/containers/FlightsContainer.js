import { errorLoading, flights, isLoading } from '../selectors';
import { fetchFlights, startLoading } from '../actions';

import Flights from '../components/flights/Flights';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  loading: isLoading(state),
  errorLoading: errorLoading(state),
  flights: flights(state),
  flightInfo: ownProps.flightInfo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  startLoading: () => dispatch(startLoading()),
  searchFlights: () => dispatch(fetchFlights(ownProps.flightInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Flights)
