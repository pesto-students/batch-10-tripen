import React from 'react';

const CardTimeDisplay = ({ day }) => {
  const date = day.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  // const time = day.getHours() + ':' + day.getMinutes();
  const time = day.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return (
    <>
      <time className="cbp_tmtime" dateTime={day}>
        <span>{date.toString()}</span> <span>{time.toString()}</span>
      </time>
    </>
  );
};

export default CardTimeDisplay;
