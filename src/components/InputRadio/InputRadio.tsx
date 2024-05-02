import * as S from "./InputRadio.styles";

import { CSSProperties } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface createInputRadioProps {
  key?: string | number;
  register?: UseFormRegisterReturn;
  value: string | number;
  text: string;
  isSelected: boolean;
  style?: CSSProperties;
}

const InputRadio = ({ value, text, register, isSelected, style }: createInputRadioProps) => {
  return (
    <>
      <input
        type="radio"
        id={`${text}_${value}`}
        value={value}
        style={{ display: "none" }}
        {...register}
      />

      <S.InputRadioLabel
        htmlFor={`${text}_${value}`}
        $isSelected={isSelected}
        style={{ ...style }}
      >
        {text}
      </S.InputRadioLabel>
    </>
  );
};

export default InputRadio;
