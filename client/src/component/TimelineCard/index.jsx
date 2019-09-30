import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TimelineCard = ({ timelineData: data }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src="http://lorempixel.com/180/100/nature/" />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>{data.tagline}</Card.Text>
    </Card.Body>
    <Link to={`/timeline/${data.timelineId}`} className="stretched-link" />
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
);
TimelineCard.propTypes = {
  timelineData: PropTypes.shape({
    timelineId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    coverPicUrl: PropTypes.string,
    lastUpdated: PropTypes.string,
  }).isRequired,
};
export default TimelineCard;
