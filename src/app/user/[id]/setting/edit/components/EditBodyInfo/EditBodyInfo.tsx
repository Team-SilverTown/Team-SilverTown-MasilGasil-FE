import * as GS from "../../UserEdit.styles";
import * as S from "./EditBodyInfo.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { Input, InputLabel } from "@/components";
import { USER_EDIT_ERROR_MESSAGE } from "../../UserEdit.constants";
import { FONT_WEIGHT } from "@/styles/theme";

interface EditBodyInfoProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;
}

const EditBodyInfo = ({ register, errors }: EditBodyInfoProps) => {
  return (
    <S.EditBodyInfoLayout>
      <S.EditBodyInfoContainer>
        <GS.UserEditTitle>키</GS.UserEditTitle>

        <Input
          type="number"
          register={register("height", {
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
      </S.EditBodyInfoContainer>
      <S.EditBodyInfoContainer>
        <GS.UserEditTitle>체중</GS.UserEditTitle>

        <Input
          type="number"
          register={register("weight", {
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
      </S.EditBodyInfoContainer>
    </S.EditBodyInfoLayout>
  );
};

export default EditBodyInfo;
