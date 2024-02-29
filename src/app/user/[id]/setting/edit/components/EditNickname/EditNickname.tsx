import * as GS from "../../UserEdit.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { USER_EDIT_ERROR_MESSAGE, USER_EDIT_PLACEHOLDER } from "../../UserEdit.constants";
import { USER_VALIDATE } from "@/constants/userValidate";
import { UserEditInput } from "..";

interface EditNicknameProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;

  isCheckedNickname: boolean;
  onCheckSameNickname: () => void;
}

const EditNickname = ({
  register,
  errors,

  isCheckedNickname,
  onCheckSameNickname,
}: EditNicknameProps) => {
  return (
    <GS.UserEditSectionContainer>
      <UserEditInput
        title={"닉네임"}
        inputType={"text"}
        placeholder={USER_EDIT_PLACEHOLDER.NICKNAME}
        errorsMessage={errors.nickname && errors.nickname.message}
        hasButton
        buttonTitle={"중복 확인"}
        onClickButton={onCheckSameNickname}
        isDisabledButton={isCheckedNickname}
        register={register("nickname", {
          required: USER_EDIT_ERROR_MESSAGE.NICKNAME.REQUIRE,
          minLength: {
            message: USER_EDIT_ERROR_MESSAGE.NICKNAME.MIN_LENGTH,
            value: USER_VALIDATE.NICKNAME.MIN_LENGTH,
          },
          maxLength: {
            message: USER_EDIT_ERROR_MESSAGE.NICKNAME.MAX_LENGTH,
            value: USER_VALIDATE.NICKNAME.MAX_LENGTH,
          },
        })}
      />
    </GS.UserEditSectionContainer>
  );
};

export default EditNickname;
