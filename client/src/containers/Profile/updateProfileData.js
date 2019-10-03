import axios from 'axios';
import serverUrl from '../../serverUrl';

const updateProfileData = async ({ username, name, token }, receivedCallbacks) => {
  const defaultCallbacks = {
    onStart: () => {}, onSuccess: () => {}, onFailure: () => {}, onCompletion: () => {},
  };
  const callbacks = { ...defaultCallbacks, ...receivedCallbacks };
  const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
  const payload = {
    username,
    name,
  };
  try {
    callbacks.onStart();
    const res = await axios.put(`${serverUrl}/api/v1/user`, payload, config);
    callbacks.onSuccess(res);
  } catch (err) {
    callbacks.onFailure(err);
  }
  callbacks.onCompletion();
};
export default updateProfileData;
