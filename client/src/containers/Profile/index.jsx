/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileView from '../../views/Profile';
import AuthContext from '../../context/auth/authContext';
import fetchPublicProfileData from './fetchPublicProfileData';
import fetchLoggedInUserTimelines from './fetchLoggedInUserTimelines';

function Profile(props) {
  const {
    isAuthenticated,
    userId: loggedInUserId,
    username: loggedInUserUsername,
    name: loggedInUserName,
    token,
  } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const checkLoggedInUser = (urlUserId) => urlUserId === loggedInUserId && isAuthenticated && token;
  const getPrivateTimelines = (allTimelines) => allTimelines
    .filter((timeline) => !!timeline.isPrivate);
  const getPublicTimelines = (allTimelines) => allTimelines
    .filter((timeline) => !timeline.isPrivate);
  const urlUserId = props.match.params.userId;
  useEffect(() => {
    if (checkLoggedInUser(urlUserId)) {
      fetchLoggedInUserTimelines(
        urlUserId,
        {
          onStart: () => {
            setIsLoading(true);
          },
          onSuccess: (response) => {
            setUserData(
              response.data
                ? {
                  userId: loggedInUserId,
                  name: loggedInUserName,
                  username: loggedInUserUsername,
                  privateTimelines: getPrivateTimelines(response.data.data),
                  publicTimelines: getPublicTimelines(response.data.data),
                }
                : [],
            );
          },
          onFailure: (e) => {
            console.error(e);
            setErrorMsg('Something went wrong! Failed to fetch User data!');
          },
          onCompletion: () => {
            setIsLoading(false);
          },
        },
        token,
      );
    } else {
      fetchPublicProfileData(urlUserId, {
        onStart: () => {
          setIsLoading(true);
        },
        onSuccess: ({ userDataResponse, userTimelinesResponse }) => {
          if (userDataResponse.data.success && userTimelinesResponse.data.success) {
            setUserData({
              ...userDataResponse.data.user,
              publicTimelines: getPublicTimelines(userTimelinesResponse.data.data),
            });
          } else {
            setErrorMsg(`${userDataResponse.data.message} ${userTimelinesResponse.data.message}`);
          }
        },
        onFailure: (e) => {
          setErrorMsg("Failed to fetch Author's data!", e);
        },
        onCompletion: () => {
          setIsLoading(false);
        },
      });
    }
  }, [urlUserId, loggedInUserId, loggedInUserName, loggedInUserUsername, token]);
  return (
    <ProfileView
      userData={userData}
      isLoading={isLoading}
      isLoggedInUserProfile={checkLoggedInUser(urlUserId)}
      errorMsg={errorMsg}
    />
  );
}
Profile.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ userId: PropTypes.string.isRequired }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default Profile;
