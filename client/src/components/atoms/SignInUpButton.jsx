import React from 'react';
import { Button } from 'react-bootstrap';

export default function SignInUpButton(props) {
  const { signUp } = this.props;
  const message = signUp
    ? 'Already have an account? Sign In'
    : 'Dont have an account? Sign Up.';

  return (
    <>
      {signUp ? (
        <Button variant="link"></Button>
      ) : (
        <Button variant="link"></Button>
      )}
    </>
  );
}
