import React, { useState } from 'react';
import './TimeLineCard.css';
import { Button, Form } from 'react-bootstrap';
import { CardDatePicker } from '../../atoms/CardDatePicker/CardDatePicker';
import CardTimeDisplay from '../../atoms/CardTimeDisplay/CardTimeDisplay';
import { TimeProvider } from './TimeContext';

const exampleText = `Winter purslane courgette pumpkin quandong komatsuna fennel green bean
cucumber watercress. Pea sprouts wattle seed rutabaga okra yarrow
cress avocado grape radish bush tomato ricebean black-eyed pea maize
eggplant. Cabbage lentil cucumber chickpea sorrel gram garbanzo
plantain lotus root bok choy squash cress potato summer purslane
salsify fennel horseradish dulse. Winter purslane garbanzo artichoke
broccoli lentil corn okra silver beet celery quandong. Plantain salad
beetroot bunya nuts black-eyed pea collard greens radish water spinach
gourd chicory prairie turnip avocado sierra leone bologi.`;

const TripCard = () => {
  const [content, setContent] = useState(exampleText);
  const [location, setLocation] = useState('');
  const [contentEditMode, setContentEditMode] = useState(false);

  const toggleEditMode = () => {
    setContentEditMode(!contentEditMode);
  };

  const handleParaChange = (e) => {
    setContent(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const buttonText = contentEditMode ? 'Done' : 'Edit';
  const buttonVariant = contentEditMode ? 'success' : 'secondary';

  return (
    <li className="trip-card-li">
      <TimeProvider>
        {contentEditMode ? (
          <CardDatePicker></CardDatePicker>
        ) : (
          <CardTimeDisplay></CardTimeDisplay>
        )}
      </TimeProvider>
      <div className="cbp_tmicon" />
      <div className="cbp_tmlabel">
        <Button
          onClick={toggleEditMode}
          className="float-right"
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
        {contentEditMode ? (
          <Form.Control
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={handleLocationChange}
          />
        ) : (
          <h2>{location}</h2>
        )}

        {contentEditMode ? (
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label hidden>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              value={content}
              onChange={handleParaChange}
            />
          </Form.Group>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </li>
  );
};
export default TripCard;
