import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileView from '../../views/Profile';
import fetchProfileData from './fetchProfileData';

function Profile(props) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const userId = props.match.params;
    fetchProfileData(userId, setUserData);
  // eslint-disable-next-line react/destructuring-assignment
  }, [props.match.params.userId]);
  return <ProfileView userData={userData} />;
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
