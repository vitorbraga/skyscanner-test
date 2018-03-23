import { combineReducers } from 'redux';
import flights from './flights';
import loading from './loading';

export default combineReducers({
  flights,
  loading
});
