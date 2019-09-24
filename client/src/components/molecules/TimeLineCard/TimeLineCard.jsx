import React, { useState } from "react";
import "./TimeLineCard.css";
import { Button, Form } from "react-bootstrap";
import { CardDatePicker } from "../../atoms/CardDatePicker/CardDatePicker";
import CardTimeDisplay from "../../atoms/CardTimeDisplay/CardTimeDisplay";
import { TimeProvider } from "./TimeContext";

const TripCard = props => {
  const [content, setContent] = useState(props.post ? props.post.content : "");
  const [location, setLocation] = useState("");
  const [contentEditMode, setContentEditMode] = useState(props.editable || false);

  const toggleEditMode = () => {
    setContentEditMode(!contentEditMode);
  };

  const handleParaChange = e => {
    setContent(e.target.value);
  };
  const handleLocationChange = e => {
    setLocation(e.target.value);
  };
  const buttonText = contentEditMode ? "Done" : "Edit";
  const buttonVariant = contentEditMode ? "success" : "secondary";

  return (
    <li className='trip-card-li'>
      {console.log("props tripCard", props)}
      <TimeProvider>
        {contentEditMode ? (
          <CardDatePicker />
        ) : (
          <CardTimeDisplay timeVal={props.post.displayTime} />
        )}
      </TimeProvider>
      <div className='cbp_tmicon' />
      <div className='cbp_tmlabel'>
        <Button onClick={toggleEditMode} className='float-right' variant={buttonVariant}>
          {buttonText}
        </Button>
        {contentEditMode ? (
          <Form.Control
            type='text'
            placeholder='Enter Location'
            value={location}
            onChange={handleLocationChange}
          />
        ) : (
          <h2>{location}</h2>
        )}

        {contentEditMode ? (
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label hidden>Description</Form.Label>
            <Form.Control as='textarea' rows='10' value={content} onChange={handleParaChange} />
          </Form.Group>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </li>
  );
};
export default TripCard;
