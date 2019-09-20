import React from 'react';

import { Container } from 'react-bootstrap';
import TripCard from '../../molecules/TripCard/TripCard';
import './TimeLine.css';

const TimeLine = () => {
  return (
    <Container>
      <ul className="cbp_tmtimeline">
        <TripCard></TripCard>
        <TripCard></TripCard>
        <TripCard></TripCard>
        <TripCard></TripCard>
      </ul>
    </Container>
  );
};

export default TimeLine;
