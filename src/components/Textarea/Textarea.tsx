import { CSSProperties, TextareaHTMLAttributes } from "react";
import * as S from "./Textarea.styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  style?: CSSProperties;
  register: UseFormRegisterReturn;
}

const Textarea = ({
  width,
  style,
  register,
  className,
  required = false,
  placeholder = "",
}: TextareaProps) => {
  return (
    <S.Textarea
      placeholder={placeholder}
      className={className}
      required={required}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      style={{ width, ...style }}
      {...register}
    />
  );
};

export default Textarea;
