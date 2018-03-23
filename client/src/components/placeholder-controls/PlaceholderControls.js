import './PlaceholderControls.scss';

import React, { Component } from 'react';

class PlaceholderControls extends Component {
  render() {
    return (
      <div className="placeholder-controls">
        <div className="left-wrapper">
          <span className="menu-button">Filter</span>
          <span className="menu-button space-left">Sort</span>
        </div>

        <div className="right-wrapper">
          <span className="menu-button">Price alerts</span>
        </div>
      </div>
    );
  }
}

export default PlaceholderControls;
