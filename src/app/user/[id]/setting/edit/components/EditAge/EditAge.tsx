import * as GS from "../../UserEdit.styles";

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
        title={"나이"}
        inputType={"number"}
        placeholder={USER_EDIT_PLACEHOLDER.AGE}
        register={register("age", {
          required: USER_EDIT_ERROR_MESSAGE.AGE.REQUIRE,
        })}
        errorsMessage={errors.age && errors.age.message}
      />
    </GS.UserEditSectionContainer>
  );
};

export default EditAge;
