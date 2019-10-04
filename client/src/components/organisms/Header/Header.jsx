import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../../context/auth/authContext';
import LogoutButton from '../../atoms/LogoutButton/LogoutButton';

import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, name, userId } = authContext;
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <FontAwesomeIcon icon={faRoute} />
          {' '}
      Tripen
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {isAuthenticated ? (
            <>
              <LinkContainer to={`/profile/${userId}`}>
                <Nav.Link>
                Welcome,
                  {' '}
                  <FontAwesomeIcon icon={faUser} />
                  {' '}
                  {name}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/timeline/edit/new">
                <Nav.Link>
                  <FontAwesomeIcon icon={faPlus} />
                  {' '}
                Create Timeline
                </Nav.Link>
              </LinkContainer>
              <LogoutButton />
            </>
          ) : <LoginModal />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
