import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TripCard = () => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="http://lorempixel.com/180/100/nature/"
          fluid
        />
        <Card.Body>
          <Card.Title>My Trip To India</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
};
export default TripCard;
