import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

const CalendarDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy년 MM월 dd일"
      selected={startDate}
      minDate={new Date()}
      onChange={(date: Date) => setStartDate(date)}
    />
  );
};

export default CalendarDatePicker;
