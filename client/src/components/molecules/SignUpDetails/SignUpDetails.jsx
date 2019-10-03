import React, { useState, useContext } from 'react';
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
  const doBothPasswordsMatch = (firstPassword, secondPassword) => firstPassword === secondPassword;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (doBothPasswordsMatch(password, password2)) {
      register({
        name,
        email,
        password,
        location: { type: 'Point', coordinates: [1, 21] },
        username,
      });
    }
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Label hidden>Name:</Form.Label>
        <Form.Control placeholder="Name" name="name" value={name} onChange={onChange} required />
        <Form.>
          <Form.Label hidden>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={onChange}
            name="email"
            required
            minLength="6"
            maxLength="254"
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form. Group>
        <Form.Label hidden>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={onChange}
          name="username"
          minLength="4"
          maxLength="15"
          title="Must not contain any whitespace, and should be of 4 or more characters"
          required
        />
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label hidden>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={onChange}
                name="password"
                required
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
                title="Must contain at least a digit and an alphabet, and should be of 8 or more characters"
                minLength="8"
                maxLength="127"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label hidden>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password Again"
                isInvalid={!doBothPasswordsMatch(password, password2)}
                value={password2}
                onChange={onChange}
                name="password2"
                required
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
                title="Must contain at least a digit and an alphabet, and should be of 8 or more charachters"
                minLength="8"
                maxLength="127"
              />
              <Form.Control.Feedback type="invalid">Passwords do not match!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group controlId="location">
          <Form.Label>Location: </Form.Label>
          <Form.Control
            type="text"
            placeholder="New Delhi, Paris, Tokyo"
            name="location"
            value={location}
            onChange={onChange}
            maxLength="127"
          />
          <Form.Text className="text-muted">Where are you from?</Form.Text>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default SignUpDetails;
