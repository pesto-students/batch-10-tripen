import React from 'react';

import { Container } from 'react-bootstrap';
import TimeLineCard from '../../molecules/TimeLineCard/TimeLineCard';
import './TimeLine.css';

const TimeLine = () => {
  return (
    <Container>
      <ul className="cbp_tmtimeline">
        <TimeLineCard></TimeLineCard>
        <TimeLineCard></TimeLineCard>
        <TimeLineCard></TimeLineCard>
        <TimeLineCard></TimeLineCard>
      </ul>
    </Container>
  );
};

export default TimeLine;
