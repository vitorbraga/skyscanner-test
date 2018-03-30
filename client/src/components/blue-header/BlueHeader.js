import './BlueHeader.scss';

import React from 'react';
import arrow from '../../images/arrow-white.svg';

const BlueHeader = ({ flightInfo }) => {
  return (
    <div className="blue-header">
      <div className="blue-header__wrapper">
        <div className="blue-header__wrapper__airports">
          <span className="airport-code">{flightInfo.fromPlace}</span>
          <img
            className="blue-header__wrapper__airports__arrow"
            alt="arrow.svg"
            src={arrow}
            height={52}
            width={52}
          />
          <span className="airport-code">{flightInfo.toPlace}</span>
        </div>
        <div className="blue-header__wrapper__other-info">
          <span>{`${flightInfo.adults} ${flightInfo.adults > 1 ? 'adults' : 'adult'}, ${flightInfo.class}`}</span>
        </div>
      </div>
    </div>
  );
}

export default BlueHeader;
