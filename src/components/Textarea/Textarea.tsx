import * as S from "./Textarea.styles";

import { CSSProperties, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  style?: CSSProperties;
  register: UseFormRegisterReturn;
}

const Textarea = ({ width, style, register, required = false, ...props }: TextareaProps) => {
  return (
    <S.TextareaStyle
      required={required}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      style={{ width, ...style }}
      {...register}
      {...props}
    />
  );
};

export default Textarea;
