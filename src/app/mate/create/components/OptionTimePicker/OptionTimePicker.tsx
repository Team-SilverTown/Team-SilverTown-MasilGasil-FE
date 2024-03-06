import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import * as S from "./OptionTimePicker.styles";

const OptionTimePicker = ({ startTime, setStartTime }) => {
  const CustomInput = ({ value, onClick }) => (
    <S.CustomInput
      onClick={onClick}
      isSelected={!!startTime}
      readOnly
    >
      {value || "모임 시간을 선택해주세요."}
    </S.CustomInput>
  );

  return (
    <DatePicker
      selected={startTime}
      onChange={(time) => setStartTime(time)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={5}
      timeCaption="희망 시간"
      dateFormat="h시 mm분 ( aa )"
      customInput={<CustomInput value={startTime ? startTime.toLocaleTimeString() : ""} />}
    />
  );
};

export default OptionTimePicker;
