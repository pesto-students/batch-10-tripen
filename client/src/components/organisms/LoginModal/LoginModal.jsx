import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import EmailAndPassInput from '../../molecules/EmailAndPassInput/EmailAndPassInput';
import SignUpDetails from '../../molecules/SignUpDetails/SignUpDetails';

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const action = signUp ? 'Sign-up' : 'Sign In';
  const buttonMessage = signUp
    ? 'Already have an account? Sign In'
    : 'Dont have an account? Sign Up.';

  const signUpToggle = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <FontAwesomeIcon icon={faSignInAlt} />
        {' '}
        Sign-In/Sign-Up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {signUp ? <SignUpDetails /> : null}
            <EmailAndPassInput />
            <Button variant="primary" type="submit">
              {action}
            </Button>
          </Form>
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
            onClick={handleClose}
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
