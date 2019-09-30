import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TimelineList from '../TimelineList';
import './AuthorTimelines.css';

const AuthorTimelines = (props) => (
  <>
    {props.isLoggedIn ? (
      <Tabs defaultActiveKey="public" id="public-private-tabs">
        <Tab eventKey="public" title="Public">
          <div className="timeline-list-container">
            <TimelineList timelines={props.publicTimelines} />
          </div>
        </Tab>
        <Tab eventKey="private" title="Private">
          <div className="timeline-list-container">
            <TimelineList timelines={props.privateTimelines} />
          </div>
        </Tab>
      </Tabs>
    ) : (
      <div className="timeline-list-container">
        <TimelineList timelines={props.publicTimelines} />
      </div>
    )}
  </>
);
AuthorTimelines.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  publicTimelines: PropTypes.array.isRequired,
  privateTimelines: PropTypes.array,
};

export default AuthorTimelines;
