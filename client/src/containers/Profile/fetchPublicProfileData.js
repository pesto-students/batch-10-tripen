import axios from 'axios';
import serverUrl from '../../serverUrl';

const getUserData = (userId, config) => axios.get(`${serverUrl}/api/v1/user/${userId}`, config);
const getTimelines = (userId, config) => axios.get(`${serverUrl}/api/v1/timeline/all/${userId}`, config);

const fetchPublicProfileData = (userId, receivedCallbacks) => {
  const defaultCallbacks = {
    onStart: () => {},
    onSuccess: () => {},
    onFailure: () => {},
    onCompletion: () => {},
  };
  const callbacks = { ...defaultCallbacks, ...receivedCallbacks };
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    callbacks.onStart();
    axios.all([getUserData(userId, config), getTimelines(userId, config)]).then(
      axios.spread((userDataResponse, userTimelinesResponse) => {
        callbacks.onSuccess({ userDataResponse, userTimelinesResponse });
      }),
    );
  } catch (err) {
    callbacks.onFailure(err);
  }
  callbacks.onCompletion();
};
export default fetchPublicProfileData;
