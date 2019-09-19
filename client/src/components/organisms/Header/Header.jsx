import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Tripen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button variant="primary">Create Timeline</Button>

          <LoginModal></LoginModal>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
