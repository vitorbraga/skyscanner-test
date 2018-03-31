import './FlightLeg.scss';

import React from 'react';
import arrow from '../../images/arrow-grey.svg';

const FlightLeg = (props) => {
  const { leg } = props;
  return (
    <div className="flight-leg">
      <div className="flight-leg__left">
        <div className="flight-leg__left__trip">
          <img
            alt={leg.carrier.name}
            className="flight-leg__left__trip__carrier"
            src={leg.carrier.imageUrl}
          />
          <div className="flight-leg__left__trip__info">
            <span className="time">{leg.departureTime}</span>
            <span className="station">{leg.originStation}</span>
          </div>
          <img
            className="flight-leg__left__trip__arrow"
            alt="arrow.svg"
            src={arrow}
            height={20}
            width={20}
          />
          <div className="flight-leg__left__trip__info">
            <span className="time">{leg.arrivalTime}</span>
            <span className="station">{leg.destinationStation}</span>
          </div>
        </div>
      </div>

      <div className="flight-leg__right">
        <span className="flight-leg__right__duration">{leg.duration}</span>
        {leg.stops === 0 ?
          <span className="flight-leg__right__stops green">Direct</span> :
          <span className="flight-leg__right__stops orange">
            {`${leg.stops} ${leg.stop > 1 ? 'stops': 'stop'}`}
          </span>
        }
      </div>
    </div>
  );
};

export default FlightLeg;
