import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faPlus } from '@fortawesome/free-solid-svg-icons';

import LoginModal from '../LoginModal/LoginModal';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
      <FontAwesomeIcon icon={faRoute} />
      {' '}
      Tripen
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Button variant="primary">
          <FontAwesomeIcon icon={faPlus} />
          {' '}
          Create Timeline
        </Button>
        <LoginModal />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Header;
