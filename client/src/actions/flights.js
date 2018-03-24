import searchFlights from '../service/flight-service';
import { stopLoading } from '../actions';

export const updateFlights = (flights) => ({
  type: 'UPDATE_FLIGHTS',
  flights
});

const fecthAndDispatch = (dispatch) => {
  searchFlights
    .then(resp => {
      console.log('resp dentro', resp);
      dispatch(updateFlights(resp.data));
      dispatch(stopLoading());
    })
    .catch(error => {
      console.log('error dentro', error);
    });
}

export const fetchFlights = () => (dispatch, getState) => {
  fecthAndDispatch(dispatch);
  return ({
    type: 'FETCH_FLIGHTS'
  });
};

