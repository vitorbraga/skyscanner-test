import { errorLoading, stopLoading } from '../actions';

import searchFlights from '../service/flight-service';

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
      dispatch(errorLoading());
    });
}

export const fetchFlights = (flightsInfo) => (dispatch, getState) => {
  fecthAndDispatch(dispatch, flightsInfo);
  return ({
    type: 'FETCH_FLIGHTS'
  });
};

