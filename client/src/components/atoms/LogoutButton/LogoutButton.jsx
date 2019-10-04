import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../../context/auth/authContext';

const LogoutButton = (props) => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  const handleLogout = () => {
    logout();
    props.history.push("/");
  }
  return (
    <Nav.Link variant="outline-secondary" onClick={handleLogout}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      {' '}
    Sign-Out
    </Nav.Link>
  );
};
export default LogoutButton;
