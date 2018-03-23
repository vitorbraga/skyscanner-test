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




// localhost:4000/api/search?adults=1&class=Economy&fromPlace=EDI&fromDate=2018-03-23&toPlace=LCY&toDate=2018-03-24

// const url = 'http://localhost:4000/api/search?adults=1&class=' +
//   'Economy&fromPlace=EDI&fromDate=2018-03-23&toPlace=LCY&toDate=2018-03-24';

// // example api use
// // TODO put this call somewhere sensible
// // TODO send parameters to server - check out `server/src/api/server.js`
// console.log('fetching results from server...');

// fetch(url)
// .then((response) => {
//   return response.json();
// })
// .then((results) => {
//   console.log('TODO: something with these results:');
//   console.log(results);
// })
// .catch(console.error);

export default App;
