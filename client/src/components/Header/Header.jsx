import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Tripen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button variant="primary">Create Timeline</Button>
              <Button variant="outline-secondary">Login/Sign-Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
