/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useContext } from 'react';
import {
  Button, Row, Col, Spinner,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './AuthorInfoSection.css';
import InputBox from '../InputBox';
import DefaultProfileImg from '../DefaultProfileImg';
import updateProfileData from '../../containers/Profile/updateProfileData';
import AuthContext from '../../context/auth/authContext';

const AuthorInfoSection = (props) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const { isAuthenticated, token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnSave = () => {
    if ((props.username !== username || props.fullName !== fullName) && isAuthenticated && token) {
      updateProfileData(
        {
          username,
          name: fullName,
          token,
        },
        {
          onStart: () => {
            setIsLoading(true);
          },
          onSuccess: () => {
            /* Change the value of Auth state */
          },
          onFailure: (e) => {
            console.warn("Couldn't update the profile data.", e);
          },
          onCompletion: () => {
            setIsLoading(false);
          },
        },
      );
    } else {
      setUsername(props.username);
      setFullName(props.fullName);
    }
  };
  useEffect(() => {
    setUsername(props.username);
    setFullName(props.fullName);
  }, [props.username, props.fullName]);
  const usernameOnChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const fullNameOnChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  return (
    <Row className="justify-content-center author-info-section">
      {props.isLoggedInUserProfile ? (
        <Col lg="4" md="8" xs="8" sm="8" className="text-center">
          <DefaultProfileImg
            imgText={props.fullName}
            className="author-image border border-primary"
          />
          <InputBox
            value={username}
            onChangeHandler={usernameOnChangeHandler}
            inputClassNames="border-bottom input-box"
            ariaLabel="Username"
            placeholder="Username"
          />
          <InputBox
            value={fullName}
            onChangeHandler={fullNameOnChangeHandler}
            inputClassNames="border-bottom input-box"
            ariaLabel="Full Name"
            placeholder="Full Name"
          />
          {props.username !== username || props.fullName !== fullName ? (
            <div className="button-group">
              <Button variant="primary" onClick={handleOnSave} disabled={isLoading}>
                {isLoading ? <Spinner animation="grow" variant="light" /> : 'Save'}
              </Button>
              <Button
                variant="outline-primary"
                disabled={isLoading}
                onClick={() => {
                  setUsername(props.username);
                  setFullName(props.fullName);
                }}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <span className="text-muted font-italic">Click on the names/img to edit them</span>
          )}
        </Col>
      ) : (
        <Col lg="4" md="8" xs="8" sm="8" className="text-center">
          <DefaultProfileImg
            imgText={props.fullName}
            className="author-image border border-primary"
          />
          <p>{props.username}</p>
          <p>{props.fullName}</p>
        </Col>
      )}
    </Row>
  );
};
AuthorInfoSection.propTypes = {
  isLoggedInUserProfile: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
};
export default AuthorInfoSection;
