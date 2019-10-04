/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, CardColumns } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TimelineCard from '../TimelineCard';

const TimelineList = ({ timelines }) => (
  <CardColumns>
    {timelines && timelines.length > 0 ? (
      timelines.map((timeline) => (

          <TimelineCard timelineData={timeline} key={timeline._id}/>

      ))
    ) : (
      <Col>
        <p className="text-muted text-center font-italic"> No Timelines Found</p>
      </Col>
    )}
  </CardColumns>
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
