/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getLastUpdatedTime from '../../utils/getLastUpdatedTime';

const TimelineCard = ({ timelineData: data }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={data.coverImg} />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>{data.tagline}</Card.Text>
    </Card.Body>
    <Link to={`/timeline/${data._id}`} className="stretched-link" />
    <Card.Footer>
      <small className="text-muted">
        Last updated
        {' '}
        {getLastUpdatedTime(data.updatedAt)}
      </small>
    </Card.Footer>
  </Card>
);
TimelineCard.propTypes = {
  timelineData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    coverImg: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};
export default TimelineCard;
