import React, { useState, createContext } from 'react';

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [moment, setMoment] = useState(new Date());
  return (
    <TimeContext.Provider value={[moment, setMoment]}>
      {children}
    </TimeContext.Provider>
  );
};
