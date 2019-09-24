import React, { useState, useEffect } from "react";
import TripList from "../../organisms/TripList/TripList";
import getFeaturedTimelines from "./getFeaturedTimelines";

const HomePage = props => {
  const [timelines, setTimelines] = useState([]);
  useEffect(() => {
    getFeaturedTimelines(setTimelines);
  }, []);
  return (
    <>
      <h1 className='text-center'>Trending Timelines</h1>
      <TripList history={props.history} timelines={timelines} />
    </>
  );
};

export default HomePage;
