import React, { useState, useEffect } from 'react';
import HomeView from '../../views/Home';
import fetchTimelines from './fetchTimelines';

export default function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const [timelines, setTimelines] = useState([]);
  useEffect(() => {
    fetchTimelines(setTimelines, setIsFetching);
  }, []);
  useEffect(() => {
    if (timelines.length > 0) {
      setIsFetching(false);
    }
  }, [timelines]);

  return <HomeView timelines={timelines} isFetching={isFetching} />;
}
