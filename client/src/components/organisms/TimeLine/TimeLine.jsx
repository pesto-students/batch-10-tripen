import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import TimeLineCard from "../../molecules/TimeLineCard/TimeLineCard";
import "./TimeLine.css";

const TimeLine = props => {
  // const [contentEditMode, setContentEditMode] = useState(false);
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    setCardList(
      props.timelineData
        ? [...props.timelineData.posts].map(post => <TimeLineCard post={post} />)
        : [],
    );
  }, [props.timelineData]);
  const addCard = () => {
    setCardList([...cardList, <TimeLineCard editable={true} />], () =>
      console.log("updatedCardList :", cardList),
    );
  };
  return (
    <Container>
      <ul className='cbp_tmtimeline'>{props.timelineData ? cardList : null}</ul>
      <Button variant='primary' onClick={addCard}>
        {" "}
        Add a Card{" "}
      </Button>
    </Container>
  );
};

export default TimeLine;
