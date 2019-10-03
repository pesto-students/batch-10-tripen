import React from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


const LoadingIndicator = ({ type, variant, text }) => (
  <Row>
    <Col className="m-5">
      <p className="text-center text-muted font-italic ">
        <Spinner className="align-middle m-2" animation={type} variant={variant} as="span" />
        {text}
      </p>
    </Col>
  </Row>
);

LoadingIndicator.defaultProps = { type: 'grow', variant: 'primary', text: 'Loading...' };
LoadingIndicator.propTypes = {
  type: PropTypes.oneOf(['grow', 'border']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  text: PropTypes.string,
};

export default LoadingIndicator;
