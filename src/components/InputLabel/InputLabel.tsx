import * as S from "./InputLabel.styles";

import React, { CSSProperties } from "react";

interface InputLabelProps {
  type?: "normal" | "safety" | "warn" | "danger";
  text?: string;
  fontSize?: string | number;
  fontColor?: string;
  position?: "start" | "center" | "end";
  style?: CSSProperties;
}

const InputLabel = ({
  text,
  type = "normal",
  position = "start",
  fontSize,
  fontColor,
  style,
}: InputLabelProps) => {
  return (
    <S.Label
      $position={position}
      style={{ ...style }}
    >
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
