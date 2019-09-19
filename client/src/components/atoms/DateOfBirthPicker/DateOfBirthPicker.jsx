import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subYears } from 'date-fns/esm';

const DateOfBirthPicker = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      showYearDropdown
      scrollableYearDropdown
      selected={startDate}
      placeholderText="mm/dd/yyyy"
      onChange={(date) => setStartDate(date)}
      maxDate={subYears(new Date(), 18)}
      className="form-control"
    />
  );
};

export default DateOfBirthPicker;
