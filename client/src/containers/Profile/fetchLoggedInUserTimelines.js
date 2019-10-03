import axios from 'axios';
import serverUrl from '../../serverUrl';

const fetchLoggedInUserTimelines = async (userId, receivedCallbacks, token) => {
  const defaultCallbacks = {
    onStart: () => {},
    onSuccess: () => {},
    onFailure: () => {},
    onCompletion: () => {},
  };
  const callbacks = { ...defaultCallbacks, ...receivedCallbacks };
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  };
  try {
    callbacks.onStart();
    const res = await axios.get(`${serverUrl}/api/v1/timeline/all/${userId}`, config);
    callbacks.onSuccess(res);
  } catch (err) {
    callbacks.onFailure(err);
  }
  callbacks.onCompletion();
};
export default fetchLoggedInUserTimelines;
