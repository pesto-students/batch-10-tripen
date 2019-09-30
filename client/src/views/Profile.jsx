import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AuthorInfoSection from '../component/AuthorInfoSection';
import AuthorTimelines from '../component/AuthorTimelines';

const ProfileView = ({ userData }) => (
  <Container>
    <div className="ProfileView">
      <AuthorInfoSection
        isLoggedIn={userData.isLoggedIn}
        fullName={userData.fullName}
        username={userData.username}
        profilePic={userData.profilePic}
      />
      <hr />
      <AuthorTimelines
        isLoggedIn={userData.isLoggedIn}
        privateTimelines={userData.privateTimelines}
        publicTimelines={userData.publicTimelines}
      />
    </div>
  </Container>
);
ProfileView.defaultProps = {
  userData: {
    userId: '',
    isLoggedIn: false,
    username: '',
    fullName: '',
    profilePic: '',
  },
};

ProfileView.propTypes = {
  userData: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    publicTimelines: PropTypes.array,
    privateTimelines: PropTypes.array,
  }),
};

export default ProfileView;
