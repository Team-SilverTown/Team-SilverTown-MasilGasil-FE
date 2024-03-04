import * as S from "./EditNickname.styles";
import * as GS from "../../UserEdit.styles";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { Button, Input, InputLabel } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { USER_EDIT_PLACEHOLDER } from "../../UserEdit.constants";
import { validation_user } from "@/constants/userValidate";
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
    <GS.UserEditSectionContainer>
      <GS.UserEditTitle>닉네임</GS.UserEditTitle>

      <S.EditNicknameActions>
        <Input
          type="text"
          register={register("nickname", validation_user.nickname)}
          placeholder={USER_EDIT_PLACEHOLDER.NICKNAME}
          style={{
            lineHeight: "2rem",
            width: "100%",
            fontSize: "1.5rem",
            fontWeight: FONT_WEIGHT.SEMIBOLD,
          }}
        />

        <Button
          width={"16rem"}
          buttonColor={theme.green_500}
          textColor={theme.text_secondary_color}
          useRipple
          rippleColor={theme.text_secondary_color + 50}
          style={{
            whiteSpace: "nowrap",
            fontSize: FONT_SIZE.H5,
            fontWeight: FONT_WEIGHT.SEMIBOLD,
            userSelect: "none",
          }}
          onClickHandler={handleClick}
          disabled={isCheckedNickname}
        >
          중복 확인
        </Button>
      </S.EditNicknameActions>

      <GS.UserEditWarning>
        {errors.nickname && (
          <InputLabel
            text={errors.nickname.message}
            type="danger"
          />
        )}
      </GS.UserEditWarning>
    </GS.UserEditSectionContainer>
  );
};

export default EditNickname;
