import './App.scss';

import React, { Component } from 'react';

import BlueHeader from './components/blue-header';
import FlightsContainer from './containers/FlightsContainer';
import PlaceholderControls from './components/placeholder-controls';
import { Provider } from 'react-redux';
import TopNav from './components/topnav';
import { buildCurrentFlight } from './utils';
import store from './store.js';

class App extends Component {

  render() {

    const flightInfo = buildCurrentFlight();

    return (
      <Provider store={store}>
        <div className="App">
          <TopNav />
          <BlueHeader flightInfo={flightInfo} />
          <PlaceholderControls />
          <FlightsContainer flightInfo={flightInfo} />
        </div>
      </Provider>
    );
  }
}

export default App;
