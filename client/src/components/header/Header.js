import './Header.scss';

import React, { Component } from 'react';

import arrow from '../../images/arrow-white.svg';

class Header extends Component {
  render() {
    return (
      <div className="blue-header">
        <div className="blue-header__airports">
          <span className="airport-code">EDI</span>
          <img
            className="blue-header__airports__arrow"
            alt="arrow.svg"
            src={arrow}
            height={52}
            width={52}
          />
          <span className="airport-code">LON</span>
        </div>
        <div className="blue-header__other-info">
          <span>1 adult, economy</span>
        </div>
      </div>
    );
  }
}

export default Header;
