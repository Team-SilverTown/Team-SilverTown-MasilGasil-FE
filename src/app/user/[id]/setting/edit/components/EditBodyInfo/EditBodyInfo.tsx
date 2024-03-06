import * as S from "./EditBodyInfo.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { USER_INPUT_PLACEHOLDER, validation_user } from "@/lib/constants/userValidate";
import { UserEditInput } from "@/components";

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
          placeholder={USER_INPUT_PLACEHOLDER.HEIGHT}
          errorsMessage={errors.height && errors.height.message}
          register={register("height", validation_user.height)}
        />
      </S.EditBodyInfoContainer>

      <S.EditBodyInfoContainer>
        <UserEditInput
          title={"몸무게"}
          inputType={"number"}
          placeholder={USER_INPUT_PLACEHOLDER.WEIGHT}
          errorsMessage={errors.weight && errors.weight.message}
          register={register("weight", validation_user.weight)}
        />
      </S.EditBodyInfoContainer>
    </S.EditBodyInfoLayout>
  );
};

export default EditBodyInfo;
