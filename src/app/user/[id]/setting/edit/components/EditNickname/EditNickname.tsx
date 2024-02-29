import * as S from "./EditNickname.styles";
import * as GS from "../../UserEdit.styles";

import { FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { Button, Input, InputLabel } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_WEIGHT } from "@/styles/theme";
import { USER_EDIT_ERROR_MESSAGE } from "../../UserEdit.constants";
import { USER_VALIDATE } from "@/constants/userValidate";
import { MouseEvent } from "react";

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
  const theme = useTheme();

  if (!theme) {
    return;
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onCheckSameNickname();
  };

  return (
    <S.EditNickNameContainer>
      <GS.UserEditTitle>닉네임</GS.UserEditTitle>

      <S.EditNicknameActions>
        <Input
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
          type="text"
          placeholder="수정하실 닉네임을 입력해주세요!"
        />

        <Button
          width={"16rem"}
          buttonColor={theme.green_500}
          textColor={theme.text_secondary_color}
          useRipple
          rippleColor={theme.text_secondary_color + 50}
          style={{ whiteSpace: "nowrap", fontWeight: FONT_WEIGHT.SEMIBOLD, userSelect: "none" }}
          onClickHandler={handleClick}
          disabled={isCheckedNickname}
        >
          중복 확인
        </Button>
      </S.EditNicknameActions>

      <S.EditNicknameWarningWrapper>
        {errors.nickname && (
          <InputLabel
            text={errors.nickname.message}
            type="danger"
          />
        )}
      </S.EditNicknameWarningWrapper>
    </S.EditNickNameContainer>
  );
};

export default EditNickname;
