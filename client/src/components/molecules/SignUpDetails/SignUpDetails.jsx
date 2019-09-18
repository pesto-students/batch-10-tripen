import React from 'react';
import { Form, Col, FormLabel } from 'react-bootstrap';
import DateOfBirthPicker from '../../atoms/DateOfBirthPicker/DateOfBirthPicker';

export default function SignUpDetails() {
  return (
    <div>
      <Form.Row>
        <Col>
          <Form.Label hidden>First Name:</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Label hidden>Last name:</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Form.Row>
      <br></br>
      <Form.Group controlId="dateOfBirth">
        <Form.Label>Date Of Birth:</Form.Label>
        <br />
        <DateOfBirthPicker></DateOfBirthPicker>
      </Form.Group>
      <Form.Group controlId="location">
        <Form.Label>Location: </Form.Label>
        <Form.Control type="email" placeholder="New Delhi, Paris, Tokyo" />
        <Form.Text className="text-muted">Where are you from?</Form.Text>
      </Form.Group>
    </div>
  );
}
