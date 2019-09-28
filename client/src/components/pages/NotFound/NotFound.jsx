import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const NotFound = () => (
  <Container className="text-center mt-5">
    <h1>Oops!</h1>
    <h1>404 Not Found</h1>
    <p>Sorry, an error has occured, Requested page not found!</p>
    <Link to="/">
      <Button>
        <FontAwesomeIcon icon={faHome} />
        {' '}
        Take Me Home
      </Button>
    </Link>
  </Container>
);

export default NotFound;
