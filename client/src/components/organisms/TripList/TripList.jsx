import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TripCard from "../../molecules/TripCard/TripCard";

const TripList = props => {
  const timelineid = 123;
  return (
    <Container>
      <Row>
        <Col md={3} onClick={() => props.history.push(`timeline/${timelineid}`)}>
          <TripCard></TripCard>
        </Col>
        <Col md={3} onClick={() => props.history.push(`timeline/${timelineid}`)}>
          <TripCard></TripCard>
        </Col>
        <Col md={3} onClick={() => props.history.push(`timeline/${timelineid}`)}>
          <TripCard></TripCard>
        </Col>
        <Col md={3} onClick={() => props.history.push(`timeline/${timelineid}`)}>
          <TripCard></TripCard>
        </Col>
        <Col md={3} onClick={() => props.history.push(`timeline/${timelineid}`)}>
          <TripCard></TripCard>
        </Col>
      </Row>
    </Container>
  );
};
export default TripList;
