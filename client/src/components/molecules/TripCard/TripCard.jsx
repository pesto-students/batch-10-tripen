import React from "react";
import { Card } from "react-bootstrap";

const TripCard = props => {
  const timeline = props.timeline;
  return (
    <Card className='mb-4'>
      <Card.Img variant='top' src='http://lorempixel.com/180/100/nature/' fluid />
      <Card.Body>
        <Card.Title>{timeline.title || "My Trip To India"}</Card.Title>
        <Card.Text>
          {timeline.tagline ||
            "Some quick example text to build on the card title and make up the bulk of the card's content"}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>
          Last updated {new Date(new Date() - new Date(timeline.updatedAt)).getMinutes()} mins ago
        </small>
      </Card.Footer>
    </Card>
  );
};
export default TripCard;
