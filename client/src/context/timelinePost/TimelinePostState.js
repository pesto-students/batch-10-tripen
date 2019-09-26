import React, { useReducer } from 'react';
import TimelinePostContext from './timelinePostContext';
import timelinePostReducer from './timelinePostReducer';

import { SET_TIME } from '../types.js';

const TimelinePostState = (props) => {
  const initialState = {
    time: new Date(),
  };
  const [state, dispatch] = useReducer(timelinePostReducer, initialState);

  // Set Time
  const setTime = ({ time }) => {
    dispatch({
      type: SET_TIME,
      payload: time,
    });
  };

  return (
    <TimelinePostContext.Provider
      value={{
        setTime,
      }}
    >
      {props.children}
    </TimelinePostContext.Provider>
  );
};

export default TimelinePostState;
