import React from "react";

import * as S from "./InputLabel.styles";

interface InputLabelProps {
  type?: "normal" | "safety" | "warn" | "danger";
  text?: string;
  fontSize?: string | number;
  fontColor?: string;
  position?: "start" | "center" | "end";
}

const InputLabel = ({
  text,
  type = "normal",
  position = "start",
  fontSize,
  fontColor,
}: InputLabelProps) => {
  return (
    <S.Label $position={position}>
      <S.Text
        $type={type}
        style={{ fontSize, color: fontColor }}
      >
        {text}
      </S.Text>
    </S.Label>
  );
};

export default InputLabel;
