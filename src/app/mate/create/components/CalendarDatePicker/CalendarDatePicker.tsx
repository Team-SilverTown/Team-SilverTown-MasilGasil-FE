import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

import * as S from "./CalendarDatePicker.styles";

interface CalendarDatePickerProps {
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CalendarDatePicker = ({ startDate, setStartDate }: CalendarDatePickerProps) => {
  const CustomInput = ({ value, onClick }: CustomInputProps) => (
    <S.CustomInput
      onClick={onClick}
      $isSelected={!!startDate}
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
      customInput={<CustomInput value={startDate ? startDate.toLocaleDateString() : ""} />}
    />
  );
};

export default CalendarDatePicker;
