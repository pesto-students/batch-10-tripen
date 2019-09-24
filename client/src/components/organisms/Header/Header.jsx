import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Tripen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/create-timeline">
          <Button variant="primary">Create Timeline</Button>
          </Link>
          <LoginModal></LoginModal>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
