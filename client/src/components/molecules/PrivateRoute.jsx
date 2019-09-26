/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = () => true;
  return (
    <Route
      {...rest}
      render={(props) => (isAuthorized ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/sign-in',
          }}
        />
      ))}
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
export default PrivateRoute;
