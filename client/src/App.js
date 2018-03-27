import './App.scss';

import React, { Component } from 'react';

import FlightsContainer from './containers/FlightsContainer';
import Header from './components/header';
import PlaceholderControls from './components/placeholder-controls';
import { Provider } from 'react-redux';
import TopNav from './components/topnav';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TopNav/>
          <Header />
          <PlaceholderControls />
          <FlightsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
