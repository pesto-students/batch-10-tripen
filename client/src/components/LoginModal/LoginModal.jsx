import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import EmailAndPassInput from '../molecules/EmailAndPassInput';
import SignUpDetails from '../molecules/SignUpDetails';

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [signUp, setSignUp] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const action = signUp ? 'Sign-up' : 'Login';
  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Login/Sign-Up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <SignUpDetails></SignUpDetails>
            <EmailAndPassInput></EmailAndPassInput>

            <Button variant="primary" type="submit">
              {action}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link">Dont have an account? Sign Up.</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
