import * as GS from "../../UserEdit.styles";

import { UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { Input, InputLabel } from "@/components";
import { FONT_WEIGHT } from "@/styles/theme";

interface UserEditInputProps {
  title: string;
  type: "height" | "weight" | "age";

  requiredMessage: string;
  placeholder: string;

  register: UseFormRegister<UserEditData>;
  errorsMessage?: string;
}

const UserEditInput = ({
  title,
  type,
  requiredMessage,
  placeholder,
  register,
  errorsMessage,
}: UserEditInputProps) => {
  <>
    <GS.UserEditTitle>{title}</GS.UserEditTitle>

    <Input
      type="number"
      register={register(type, {
        required: requiredMessage,
      })}
      placeholder={placeholder}
      style={{
        lineHeight: "2rem",
        width: "100%",
        fontSize: "1.5rem",
        fontWeight: FONT_WEIGHT.SEMIBOLD,
      }}
    />

    <GS.UserEditWarning>
      {errorsMessage && (
        <InputLabel
          text={errorsMessage}
          type="danger"
        />
      )}
    </GS.UserEditWarning>
  </>;
};

export default UserEditInput;
