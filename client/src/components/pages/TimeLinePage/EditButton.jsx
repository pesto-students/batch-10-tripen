import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import serverUrl from '../../../serverUrl';


const DeleteButton = ({ timelineId }) => 
//   const deleteTimeline = () => axios.delete(`${serverUrl}/api/v1/timeline/${timelineId}`);
   (
    <>
      <Button onClick={deleteTimeline}>Edit Timeline</Button>
    </>
  )
;


export default DeleteButton;
