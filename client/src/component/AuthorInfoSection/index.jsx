import React, { useState, useEffect } from 'react';
import {
  Image, Button, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './AuthorInfoSection.css';
import InputBox from '../InputBox';

const AuthorInfoSection = (props) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
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
      {props.isLoggedIn ? (
        <Col lg="4" md="8" xs="8" sm="8" className="text-center">
          <Image
            src={props.profilePic}
            width={100}
            height={100}
            alt="Author"
            className="author-image border border-primary text-center"
            roundedCircle
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
              <Button variant="primary">Save</Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  setUsername(props.username || '');
                  setFullName(props.fullName || '');
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
          <Image
            src={props.profilePic}
            width={100}
            height={100}
            alt="Author"
            className="author-image"
            roundedCircle
          />
          <p>{props.username}</p>
          <p>{props.fullName}</p>
        </Col>
      )}
    </Row>
  );
};
AuthorInfoSection.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
};
export default AuthorInfoSection;
