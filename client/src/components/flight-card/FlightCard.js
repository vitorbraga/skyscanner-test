import './FlightCard.scss';

import { Card } from '../sky-components';
import FlightLeg from './FlightLeg';
import React from 'react';
import { SelectButton } from '../sky-components';

const FlightCard = ({ flight }) => (
  <Card>
    <div className="flight-card">
      <div className="flight-card__top">
        <FlightLeg leg={flight.outbound} />
        <FlightLeg leg={flight.inbound} />
      </div>
      <div className="flight-card__bottom">
        <div className="flight-card__bottom__left">
          <span className="flight-card__bottom__left__price">{`£${flight.price}`}</span>
          <span className="flight-card__bottom__left__agent">{flight.agent}</span>
        </div>
        <div className="flight-card__bottom__right">
          <a href={flight.link} target="_blank" >
            <SelectButton label="Select"  />
          </a>
        </div>
      </div>
    </div>
  </Card>
);

export default FlightCard;
