import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import EmailAndPassInput from '../../molecules/EmailAndPassInput/EmailAndPassInput';
import SignUpDetails from '../../molecules/SignUpDetails/SignUpDetails';

const LoginModal = () => {
  const [show, setShow] = useState(true);
  const [signUp, setSignUp] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const initSignUp = () => setSignUp(true);
  const initSignIn = () => setSignUp(false);

  const action = signUp ? 'Sign-up' : 'Sign In';
  const buttonMessage = signUp
    ? 'Already have an account? Sign In'
    : 'Dont have an account? Sign Up.';
  const buttonClickHandler = () => {
    signUp ? initSignIn() : initSignUp();
  };
  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Sign-In/Sign-Up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {signUp ? <SignUpDetails></SignUpDetails> : null}
            <EmailAndPassInput></EmailAndPassInput>
            <Button variant="primary" type="submit">
              {action}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={buttonClickHandler}>
            {buttonMessage}
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
