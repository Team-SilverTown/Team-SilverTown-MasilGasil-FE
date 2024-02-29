import { Input, InputLabel } from "@/components";
import * as GS from "../../UserEdit.styles";

import { FONT_WEIGHT } from "@/styles/theme";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { USER_EDIT_ERROR_MESSAGE, USER_EDIT_PLACEHOLDER } from "../../UserEdit.constants";
import { UserEditInput } from "..";

interface EditAgeProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;
}

const EditAge = ({ register, errors }: EditAgeProps) => {
  return (
    <GS.UserEditSectionContainer>
      <UserEditInput
        register={register}
        title={"나이"}
        type={"age"}
        requiredMessage={USER_EDIT_ERROR_MESSAGE.AGE.REQUIRE}
        placeholder={USER_EDIT_PLACEHOLDER.AGE}
        errorsMessage={errors.age && errors.age.message}
      />
    </GS.UserEditSectionContainer>
  );
};

export default EditAge;
