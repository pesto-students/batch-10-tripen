import React, { Fragment, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default Header;
