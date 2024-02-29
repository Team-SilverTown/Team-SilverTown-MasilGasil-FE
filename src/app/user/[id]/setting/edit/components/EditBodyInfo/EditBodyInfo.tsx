import * as GS from "../../UserEdit.styles";
import * as S from "./EditBodyInfo.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { Input, InputLabel } from "@/components";
import { USER_EDIT_ERROR_MESSAGE, USER_EDIT_PLACEHOLDER } from "../../UserEdit.constants";
import { FONT_WEIGHT } from "@/styles/theme";
import { UserEditInput } from "..";

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
          type={"height"}
          requiredMessage={USER_EDIT_ERROR_MESSAGE.HEIGHT.REQUIRE}
          placeholder={USER_EDIT_PLACEHOLDER.HEIGHT}
          register={register}
          errorsMessage={errors.height && errors.height.message}
        />
      </S.EditBodyInfoContainer>

      <S.EditBodyInfoContainer>
        <UserEditInput
          title={"몸무게"}
          type={"weight"}
          requiredMessage={USER_EDIT_ERROR_MESSAGE.WEIGHT.REQUIRE}
          placeholder={USER_EDIT_PLACEHOLDER.WEIGHT}
          register={register}
          errorsMessage={errors.weight && errors.weight.message}
        />
      </S.EditBodyInfoContainer>
    </S.EditBodyInfoLayout>
  );
};

export default EditBodyInfo;
