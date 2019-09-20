import React from 'react';
import TripList from '../../organisms/TripList/TripList';

const HomePage = (props) => {
  return (
    <>
      <h1 className="text-center">Trending Timelines</h1>
      <TripList history={props.history}/>
    </>
  );
};

export default HomePage;
