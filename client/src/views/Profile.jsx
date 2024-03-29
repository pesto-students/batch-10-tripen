import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AuthorInfoSection from '../component/AuthorInfoSection';
import AuthorTimelines from '../component/AuthorTimelines';
import LoadingIndicator from '../component/LoadingIndicator';

const ProfileView = ({
  userData, isLoading, isLoggedInUserProfile, errorMsg,
}) => (
  <Container>
    <div className="ProfileView">
      {isLoading ? (
        <LoadingIndicator text="fetching profile data ... " />
      ) : (
        <>
          <AuthorInfoSection
            isLoggedInUserProfile={false}
            fullName={userData.name}
            username={userData.username}
            profilePic={userData.profilePic}
          />
          <hr />
          <AuthorTimelines
            isLoggedInUserProfile={isLoggedInUserProfile}
            privateTimelines={userData.privateTimelines}
            publicTimelines={userData.publicTimelines}
          />
        </>
      )}
    </div>
  </Container>
);
ProfileView.defaultProps = {
  userData: {
    userId: '',
    username: '',
    name: '',
    profilePic: '',
  },
  isLoading: true,
  isLoggedInUserProfile: false,
  errorMsg: '',
};

ProfileView.propTypes = {
  userData: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    publicTimelines: PropTypes.array,
    privateTimelines: PropTypes.array,
  }),
  isLoading: PropTypes.bool,
  isLoggedInUserProfile: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default ProfileView;
