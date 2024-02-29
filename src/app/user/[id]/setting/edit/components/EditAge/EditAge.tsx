import { Input, InputLabel } from "@/components";
import * as GS from "../../UserEdit.styles";

import { FONT_WEIGHT } from "@/styles/theme";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { USER_EDIT_ERROR_MESSAGE } from "../../UserEdit.constants";

interface EditAgeProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;
}

const EditAge = ({ register, errors }: EditAgeProps) => {
  return (
    <GS.UserEditSectionContainer>
      <GS.UserEditTitle>나이</GS.UserEditTitle>

      <Input
        type="number"
        register={register("age", {
          required: USER_EDIT_ERROR_MESSAGE.AGE.REQUIRE,
        })}
        placeholder="수정하실 닉네임을 입력해주세요!"
        style={{
          lineHeight: "2rem",
          width: "100%",
          fontSize: "1.5rem",
          fontWeight: FONT_WEIGHT.SEMIBOLD,
        }}
      />

      <GS.UserEditWarning>
        {errors.age && (
          <InputLabel
            text={errors.age.message}
            type="danger"
          />
        )}
      </GS.UserEditWarning>
    </GS.UserEditSectionContainer>
  );
};

export default EditAge;
