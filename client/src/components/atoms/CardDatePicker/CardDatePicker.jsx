import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateOfBirthPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date) => setStartDate(date);
  return (
    <DatePicker
      showYearDropdown
      scrollableYearDropdown
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      selected={startDate}
      onChange={handleChange}
      maxDate={new Date()}
      dateFormat="MMMM d, yyyy h:mm aa"
      className="form-control"
    />
  );
};

export default DateOfBirthPicker;
