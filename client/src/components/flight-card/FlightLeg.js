import './FlightLeg.scss';

import React from 'react';
import arrow from '../..//arrow.svg';

const FlightLeg = (props) => {
  return (
    <div className="flight-leg">
      <div className="flight-leg__left">
        <div className="flight-leg__left__trip">
          <img
            alt={props.leg.carrier.name}
            className="flight-leg__left__trip__carrier"
            src={props.leg.carrier.imageUrl}
          />
          <div className="flight-leg__left__trip__info">
            <span className="time">{props.leg.departureTime}</span>
            <span className="station">{props.leg.originStation}</span>
          </div>
          <img
            className="flight-leg__left__trip__arrow"
            alt="arrow.svg"
            src={arrow}
            height={24}
            width={24}
          />
          <div className="flight-leg__left__trip__info">
            <span className="time">{props.leg.arrivalTime}</span>
            <span className="station">{props.leg.destinationStation}</span>
          </div>
        </div>
      </div>

      <div className="flight-leg__right">
        <span className="flight-leg__right__duration">{props.leg.duration}</span>
        <span className="flight-leg__right__stops">
          {props.leg.stops === 0 ? 'Direct' : `${props.leg.stops} stops`}
        </span>
      </div>
    </div>
  );
};

export default FlightLeg;
