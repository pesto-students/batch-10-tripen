import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
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
