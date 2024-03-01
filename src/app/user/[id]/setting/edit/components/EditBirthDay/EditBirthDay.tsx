import * as GS from "../../UserEdit.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { USER_EDIT_PLACEHOLDER } from "../../UserEdit.constants";
import { UserEditInput } from "..";
import { validation_user } from "@/constants/userValidate";

interface EditAgeProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;
}

const EditBirthDay = ({ register, errors }: EditAgeProps) => {
  return (
    <GS.UserEditSectionContainer>
      <UserEditInput
        title={"나이"}
        inputType={"date"}
        placeholder={USER_EDIT_PLACEHOLDER.AGE}
        register={register("age", validation_user.age)}
        errorsMessage={errors.age && errors.age.message}
      />
    </GS.UserEditSectionContainer>
  );
};

export default EditBirthDay;
