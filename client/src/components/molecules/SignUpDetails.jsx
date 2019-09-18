import React from 'react';
import { Form, Col } from 'react-bootstrap';
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
    </div>
  );
}
