import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button } from 'react-bootstrap';
import AuthContext from '../../../context/auth/authContext';


const SignUpDetails = () => {
  const authContext = useContext(AuthContext);

  const { register } = authContext;


  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password2: '',
    location: '',

  });
  const {
    name, email, password, password2, location, username,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    register({
      name, email, password, location, username,
    });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Label hidden>Name:</Form.Label>
        <Form.Control placeholder="Name" name="name" value={name} onChange={onChange} required />
        <Form.Group>
          <Form.Label hidden>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChange} name="email" required />
          <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Label hidden>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" value={username} onChange={onChange} name="username" required />
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label hidden>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={password} onChange={onChange} name="password" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label hidden>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password Again" value={password2} onChange={onChange} name="password2" required />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group controlId="location">
          <Form.Label>Location: </Form.Label>
          <Form.Control type="text" placeholder="New Delhi, Paris, Tokyo" name="location" value={location} onChange={onChange} />
          <Form.Text className="text-muted">Where are you from?</Form.Text>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

SignUpDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpDetails;
