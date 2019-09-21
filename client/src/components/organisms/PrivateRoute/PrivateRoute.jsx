import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = () => true;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              //   state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
