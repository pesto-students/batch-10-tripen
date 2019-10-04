import axios from 'axios';
import serverUrl from '../../serverUrl';

const fetchTimelines = async (setTimelineData, setIsFetching, page) => {
  setIsFetching(true);
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const res = await axios.get(`${serverUrl}/api/v1/timeline?page=${page}`, config);
    setTimelineData(res.data.data);
    setIsFetching(false);
  } catch (err) {
    console.warn(err);
    setIsFetching(false);
  }
};
export default fetchTimelines;
