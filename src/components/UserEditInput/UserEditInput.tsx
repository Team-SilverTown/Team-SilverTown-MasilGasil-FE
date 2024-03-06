import * as S from "./UserEditInput.styles";
import * as GS from "../../app/user/[id]/setting/edit/UserEdit.styles";

import { UseFormRegisterReturn } from "react-hook-form";
import { Input, InputLabel } from "@/components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

interface UserEditInputProps {
  title: string;
  inputType: "text" | "number" | "date";
  placeholder: string;
  errorsMessage?: string;

  register: UseFormRegisterReturn;
}

const UserEditInput = ({
  title,
  inputType,
  placeholder,
  errorsMessage,

  register,
}: UserEditInputProps) => {
  return (
    <>
      <GS.UserEditTitle>{title}</GS.UserEditTitle>

      <S.InputActions>
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
      </S.InputActions>

      <GS.UserEditWarning>
        {errorsMessage && (
          <InputLabel
            text={errorsMessage}
            type="danger"
          />
        )}
      </GS.UserEditWarning>
    </>
  );
};

export default UserEditInput;
