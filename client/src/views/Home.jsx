import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LoadingIndicator from '../component/LoadingIndicator';
import TimelineList from '../component/TimelineList';

export default function HomeView({ isFetching, timelines }) {
  return (
    <Container>
      <h1 className="text-center">Trending Timelines</h1>
      <hr />
      {isFetching
        ? <LoadingIndicator text="Fetching Timelines ..." />
        : <TimelineList timelines={timelines} />}
    </Container>
  );
}
HomeView.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  timelines: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      coverImg: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
};
