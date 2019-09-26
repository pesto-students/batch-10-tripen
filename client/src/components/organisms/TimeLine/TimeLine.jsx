import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './TimeLine.css';

import * as data from './TimeLine.json';

const TimeLine = () => {
  const cards = data.default.posts;
  const timeLineCards = cards.map((card) => {
    return (
      <li key={card._id.$oid}>
        <time className='cbp_tmtime' dateTime='2013-04-10 18:30'>
          <span>4/10/13</span> <span>18:30</span>
        </time>

        <div className='cbp_tmlabel'>
          <h2>{card.title}</h2>
          <Image src={card.coverImg} fluid />
          <p>{card.content}</p>
        </div>
      </li>
    );
  });

  return (
    <Container>
      <ul className='cbp_tmtimeline'>{timeLineCards}</ul>
    </Container>
  );
};

export default TimeLine;
