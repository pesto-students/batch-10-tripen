import React from 'react';
import { Container, Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LoadingIndicator from '../component/LoadingIndicator';
import TimelineList from '../component/TimelineList';

export default function HomeView({
  isFetching, timelines, changePage, currentPage,
}) {
  return (
    <>
      <Container>
        <h1 className="text-center">Trending Timelines</h1>
        <hr />
        {isFetching
          ? <LoadingIndicator text="Fetching Timelines ..." />
          : <TimelineList timelines={timelines} />}
        <Pagination className="justify-content-md-center">
          <Pagination.Item key={1} onClick={() => changePage(1)} active={currentPage === 1}>
            {1}
          </Pagination.Item>
          <Pagination.Item key={2} onClick={() => changePage(2)} active={currentPage === 2}>
            {2}
          </Pagination.Item>
          <Pagination.Item key={3} onClick={() => changePage(3)} active={currentPage === 3}>
            {3}
          </Pagination.Item>
          <Pagination.Item key={4} onClick={() => changePage(4)} active={currentPage === 4}>
            {4}
          </Pagination.Item>
        </Pagination>
      </Container>

    </>
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
