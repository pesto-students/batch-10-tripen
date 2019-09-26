import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../../../context/auth/authContext';

export default function SignUpDetails() {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const {
    email, password,
  } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label hidden>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChange} name="email" required />
        </Form.Group>
        <Form.Group>
          <Form.Label hidden>Email address</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={password} onChange={onChange} name="password" required />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
