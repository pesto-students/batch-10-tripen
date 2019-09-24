import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TimeContext } from '../../molecules/TimeLineCard/TimeContext';

export const CardDatePicker = () => {
  const [moment, setMoment] = useContext(TimeContext);
  const handleChange = (date) => setMoment(date);
  return (
    <DatePicker
      showYearDropdown
      scrollableYearDropdown
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      selected={moment}
      onChange={handleChange}
      maxDate={new Date()}
      dateFormat="MMMM d, yyyy h:mm aa"
      className="form-control"
    />
  );
};
