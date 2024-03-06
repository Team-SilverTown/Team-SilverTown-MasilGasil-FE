import * as S from "./EditBodyInfo.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { USER_EDIT_PLACEHOLDER } from "../../UserEdit.constants";
import { UserEditInput } from "..";
import { validation_user } from "@/lib/constants/userValidate";

interface EditBodyInfoProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;
}

const EditBodyInfo = ({ register, errors }: EditBodyInfoProps) => {
  return (
    <S.EditBodyInfoLayout>
      <S.EditBodyInfoContainer>
        <UserEditInput
          title={"키"}
          inputType={"number"}
          placeholder={USER_EDIT_PLACEHOLDER.HEIGHT}
          errorsMessage={errors.height && errors.height.message}
          register={register("height", validation_user.height)}
        />
      </S.EditBodyInfoContainer>

      <S.EditBodyInfoContainer>
        <UserEditInput
          title={"몸무게"}
          inputType={"number"}
          placeholder={USER_EDIT_PLACEHOLDER.WEIGHT}
          errorsMessage={errors.weight && errors.weight.message}
          register={register("weight", validation_user.weight)}
        />
      </S.EditBodyInfoContainer>
    </S.EditBodyInfoLayout>
  );
};

export default EditBodyInfo;
