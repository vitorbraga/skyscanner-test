import './PlaceholderControls.scss';

import React, { Component } from 'react';

class PlaceholderControls extends Component {
  render() {
    return (
      <div className="placeholder-controls">
        <div className="placeholder-controls__wrapper">
          <div className="placeholder-controls__wrapper__left-wrapper">
            <span className="menu-button">Filter</span>
            <span className="menu-button space-left">Sort</span>
          </div>

          <div className="placeholder-controls__wrapper__right-wrapper">
            <span className="menu-button">Price alerts</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceholderControls;
