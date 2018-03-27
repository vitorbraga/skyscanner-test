import './FlightCard.scss';

import { Card } from '../sky-components';
import FlightLeg from './FlightLeg';
import React from 'react';
import { SelectButton } from '../sky-components';

const FlightCard = (props) => (
  <Card>
    <div className="flight-card">
      <div className="flight-card__top">
        <FlightLeg leg={props.flight.outbound} />
        <FlightLeg leg={props.flight.inbound} />
      </div>
      <div className="flight-card__bottom">
        <div className="flight-card__bottom__left">
          <span className="flight-card__bottom__left__price">{`£${props.flight.price}`}</span>
          <span className="flight-card__bottom__left__agent">{props.flight.agent}</span>
        </div>
        <div className="flight-card__bottom__right">
          <SelectButton label="Select" />
        </div>
      </div>
    </div>
  </Card>
);

export default FlightCard;
