import { fetchFlights, startLoading } from '../actions';
import { flights, isLoading } from '../selectors';

import Flights from '../components/flights/Flights';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: isLoading(state),
  flights: flights(state)
})
 
const mapDispatchToProps = dispatch => ({
  searchFlights: fetchFlights,
  startLoading: () => dispatch(startLoading())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Flights)
