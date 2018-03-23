import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  loading: false,
  flights: []
};

const store = createStore(rootReducer, initialState);

export default store;
