import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TripCard from "../../molecules/TripCard/TripCard";

const TripList = props => {
  const timelines = props.timelines.data;
  return (
    <Container>
      <Row>
        {timelines
          ? timelines.map(timeline => (
              <Col
                md={3}
                key={timeline._id}
                onClick={() => props.history.push(`timeline/${timeline._id}`)}
              >
                <TripCard timeline={timeline} />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};
export default TripList;
