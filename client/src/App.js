import './App.scss';

import React, { Component } from 'react';

import Header from './components/header';
import PlaceholderControls from './components/placeholder-controls';
import Results from './components/results';
import TopNav from './components/topnav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <Header />
        <PlaceholderControls />
        <Results />
      </div>
    );
  }
}

// example api use
// TODO put this call somewhere sensible
// TODO send parameters to server - check out `server/src/api/server.js`
console.log('fetching results from server...');

fetch('http://localhost:4000/api/search')
.then((response) => {
  return response.json();
})
.then((results) => {
  console.log('TODO: something with these results:');
  console.log(results);
})
.catch(console.error);

export default App;
