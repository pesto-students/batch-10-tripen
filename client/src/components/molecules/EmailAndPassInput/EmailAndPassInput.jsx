import React from 'react';
import { Form } from 'react-bootstrap';

const EmailAndPassInput = () => {
  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label hidden>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label hidden>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </>
  );
};

export default EmailAndPassInput;
