import * as S from "./UserEditInput.styles";

import { UseFormRegisterReturn } from "react-hook-form";
import { Input, InputLabel } from "@/components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

interface UserEditInputProps {
  title: string;
  description?: string;
  inputType: "text" | "number" | "date";
  placeholder: string;
  errorsMessage?: string;
  unit?: string;

  register: UseFormRegisterReturn;
}

const UserEditInput = ({
  title,
  description,
  inputType,
  placeholder,
  errorsMessage,
  unit,

  register,
}: UserEditInputProps) => {
  return (
    <>
      <S.UserEditInputTitle>
        {title}
        <S.UserEditInputDescription>{description}</S.UserEditInputDescription>
      </S.UserEditInputTitle>

      <S.UserEditInputActions>
        <Input
          type={inputType}
          register={register}
          placeholder={placeholder}
          style={{
            lineHeight: "2rem",
            width: "100%",
            fontSize: FONT_SIZE.MEDIUM,
            fontWeight: FONT_WEIGHT.SEMIBOLD,
          }}
        />

        {unit && <S.UserEditInputUnit>{unit}</S.UserEditInputUnit>}
      </S.UserEditInputActions>

      <S.UserEditWarning>
        {errorsMessage && (
          <InputLabel
            text={errorsMessage}
            type="danger"
          />
        )}
      </S.UserEditWarning>
    </>
  );
};

export default UserEditInput;
