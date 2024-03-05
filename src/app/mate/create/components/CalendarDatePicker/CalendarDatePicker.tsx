import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

import * as S from "./CalendarDatePicker.styles";

const CalendarDatePicker = () => {
  const [startDate, setStartDate] = useState(null);

  const CustomInput = ({ value, onClick, startDate }) => (
    <S.CustomInput
      onClick={onClick}
      isSelected={startDate !== null}
      readOnly
    >
      {value || "모임 날짜를 선택해주세요."}
    </S.CustomInput>
  );

  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy년 MM월 dd일"
      selected={startDate}
      minDate={new Date()}
      onChange={(date: Date) => setStartDate(date)}
      customInput={<CustomInput startDate={startDate} />}
    />
  );
};

export default CalendarDatePicker;
