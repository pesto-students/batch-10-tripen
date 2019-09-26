import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './TimeLine.css';

import * as data from './TimeLine.json';

const TimeLine = () => {
  const cards = data.default.posts;
  console.log(cards);
  const timeLineCards = cards.map((card) => {
    const dateOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const timeOptions = {
      hour: 'numeric',
      minute: '2-digit',
    };
    const d = new Date(Date.parse(card.displayTime.$date));
    const displayDate = d.toLocaleString('en-US', dateOptions);
    const displayTime = d.toLocaleString('en-US', timeOptions);
    return (
      <li key={card._id.$oid}>
        <time className='cbp_tmtime' dateTime={d}>
          <span>{displayDate}</span> <span>{displayTime}</span>
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
