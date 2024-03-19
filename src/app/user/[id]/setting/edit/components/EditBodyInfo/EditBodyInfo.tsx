import * as S from "./EditBodyInfo.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";

import { UserEditInput } from "@/components";
import { USER_INPUT_PLACEHOLDER, validation_user } from "@/lib/constants/userConstants";
import { MeResponse } from "@/types/Response";

interface EditBodyInfoProps {
  register: UseFormRegister<MeResponse>;
  errors: FieldErrors<MeResponse>;
}

const EditBodyInfo = ({ register, errors }: EditBodyInfoProps) => {
  return (
    <S.EditBodyInfoLayout>
      <S.EditBodyInfoContainer>
        <UserEditInput
          title={"키"}
          unit={"cm"}
          inputType={"number"}
          placeholder={USER_INPUT_PLACEHOLDER.HEIGHT}
          errorsMessage={errors.height && errors.height.message}
          register={register("height", validation_user.height)}
        />
      </S.EditBodyInfoContainer>

      <S.EditBodyInfoContainer>
        <UserEditInput
          title={"몸무게"}
          unit={"kg"}
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
