import React from 'react';
import { Form, Col, FormLabel } from 'react-bootstrap';
import MyDatePicker from '../atoms/DatePicker';

export default function SignUpDetails() {
  return (
    <div>
      <Form.Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Form.Row>
      <br></br>
      <Form.Group controlId="dateOfBirth">
        <Form.Label>Date Of Birth</Form.Label>
        <br />
        <MyDatePicker></MyDatePicker>
      </Form.Group>
      <Form.Group controlId="location">
        <Form.Label>Location: </Form.Label>
        <Form.Control type="email" placeholder="New Delhi, Paris, Tokyo" />
        <Form.Text className="text-muted">Where are you from?</Form.Text>
      </Form.Group>
    </div>
  );
}
