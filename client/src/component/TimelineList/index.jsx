/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TimelineCard from '../TimelineCard';

const TimelineList = ({ timelines }) => (
  <Row>
    {timelines && timelines.length > 0 ? (
      timelines.map((timeline) => (
        <Col md={4} key={timeline._id}>
          <TimelineCard timelineData={timeline} />
        </Col>
      ))
    ) : (
      <Col>
        <p className="text-muted text-center font-italic"> No Timelines Found</p>
      </Col>
    )}
  </Row>
);
TimelineList.defaultProps = {
  timelines: [],
};

TimelineList.propTypes = {
  timelines: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      coverImg: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ),
};
export default TimelineList;
