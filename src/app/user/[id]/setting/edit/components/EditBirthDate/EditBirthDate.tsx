import * as GS from "../../UserEdit.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { USER_INPUT_PLACEHOLDER, validation_user } from "@/lib/constants/userValidate";
import { UserEditInput } from "@/components";

interface EditAgeProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;
}

const EditBirthDate = ({ register, errors }: EditAgeProps) => {
  return (
    <GS.UserEditSectionContainer>
      <UserEditInput
        title={"나이"}
        inputType={"date"}
        placeholder={USER_INPUT_PLACEHOLDER.BIRTH_DATE}
        register={register("birthDate", validation_user.birthDate)}
        errorsMessage={errors.birthDate && errors.birthDate.message}
      />
    </GS.UserEditSectionContainer>
  );
};

export default EditBirthDate;
