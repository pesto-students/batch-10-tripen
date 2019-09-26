import React, { useState, useContext, useEffect } from 'react';
import { Nav, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../../context/auth/authContext';

import SignUpDetails from '../../molecules/SignUpDetails/SignUpDetails';
import SignInDetails from '../../molecules/SignInDetails/SignInDetails';


const LoginModal = () => {
  const authContext = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const { isAuthenticated } = authContext;

  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  const action = signUp ? 'Sign-up' : 'Sign In';
  const buttonMessage = signUp
    ? 'Already have an account? Sign In'
    : 'Dont have an account? Sign Up.';

  const signUpToggle = () => {
    setSignUp(!signUp);
  };

  useEffect(() => {
    if (isAuthenticated) {
      closeModal();
    }
  });

  return (
    <>
      <Nav.Link onClick={showModal}>
        <FontAwesomeIcon icon={faSignInAlt} />
        {' '}
        Sign-In/Sign-Up
      </Nav.Link>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {signUp ? <SignUpDetails /> : <SignInDetails />}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="link"
            onClick={signUpToggle}
            className="toggleSignUp"
          >
            {buttonMessage}
          </Button>
          <Button
            variant="secondary"
            onClick={closeModal}
            className="close-button"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
