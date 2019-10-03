import axios from 'axios';
<<<<<<< HEAD
import serverUrl from '../../serverUrl';

const fetchTimelines = async (setTimelineData, setIsFetching) => {
=======

export default function fetchTimelines(setTimelineData, setIsFetching) {
>>>>>>> 4ab8fbd... fetch timelines
  setIsFetching(true);
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const res = await axios.get(`${serverUrl}/api/v1/timeline`, config);
    setTimelineData(res.data.data);
    setIsFetching(false);
  } catch (err) {
    console.warn(err);
    setIsFetching(false);
  }
};
export default fetchTimelines;
