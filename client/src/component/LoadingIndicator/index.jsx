import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoadingIndicator = ({ type, variant, text }) => (
  <p className="text-center">
    <Spinner animation={type} variant={variant} as="span" />
    {text}
  </p>
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
