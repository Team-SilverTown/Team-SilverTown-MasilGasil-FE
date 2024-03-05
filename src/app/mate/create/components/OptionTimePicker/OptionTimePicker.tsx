import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import * as S from "./OptionTimePicker.styles";

const OptionTimePicker = () => {
  const [startTime, setStartTime] = useState(null);

  const CustomInput = ({ value, onClick, startTime }) => (
    <S.CustomInput
      onClick={onClick}
      isSelected={startTime !== null}
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
      timeCaption="Time"
      dateFormat="h시 mm분 ( aa )"
      customInput={<CustomInput startTime={startTime} />}
    />
  );
};

export default OptionTimePicker;
