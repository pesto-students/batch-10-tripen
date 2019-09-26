import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-bootstrap';
import AlertContext from '../../../context/alert/alertContext';


const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    alerts.length > 0 && alerts.map((alert) => (
      <Alert key={alert.id} variant={alert.type}>
        <FontAwesomeIcon icon={faInfoCircle} />
        {' '}
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
