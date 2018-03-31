import './PlaceholderControls.scss';

import React, { Component } from 'react';

class PlaceholderControls extends Component {
  render() {
    return (
      <div className="placeholder-controls">
        <div className="placeholder-controls__wrapper">
          <div className="placeholder-controls__wrapper__left-wrapper">
            <a href="#" className="menu-button">Filter</a>
            <a href="#" className="menu-button space-left">Sort</a>
          </div>

          <div className="placeholder-controls__wrapper__right-wrapper">
            <a href="#" className="menu-button">Price alerts</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceholderControls;
