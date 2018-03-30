import searchFlights from '../service/flight-service';
import { stopLoading } from '../actions';

export const updateFlights = (flights) => ({
  type: 'UPDATE_FLIGHTS',
  flights
});

const fecthAndDispatch = (dispatch, flightsInfo) => {
  searchFlights(flightsInfo)
    .then(resp => {
      dispatch(updateFlights(resp.data));
      dispatch(stopLoading());
    })
    .catch(error => {
      console.log('Some error', error); // FIXME
    });
}

export const fetchFlights = (flightsInfo) => (dispatch, getState) => {
  fecthAndDispatch(dispatch, flightsInfo);
  return ({
    type: 'FETCH_FLIGHTS'
  });
};

