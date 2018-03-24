import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  flights: []
};

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer,
  initialState, enhancers);

export default store;
