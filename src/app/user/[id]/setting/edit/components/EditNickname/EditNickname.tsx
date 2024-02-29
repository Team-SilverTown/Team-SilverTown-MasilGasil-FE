import * as S from "./EditNickname.styles";
import * as GS from "../../UserEdit.styles";

import { UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { Button, Input, InputLabel } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_WEIGHT } from "@/styles/theme";

interface EditNicknameProps {
  register: UseFormRegister<UserEditData>;

  onChangeNickname: () => void;
}

const EditNickname = ({ register, onChangeNickname }: EditNicknameProps) => {
  const theme = useTheme();

  if (!theme) {
    return;
  }
  return (
    <S.EditNickNameContainer>
      <GS.UserEditTitle>닉네임</GS.UserEditTitle>

      <S.EditNicknameActions>
        <Input
          register={register("nickname", {
            required: "변경하실 닉네임을 입력해주세요.",
            minLength: { message: "2글자 이상을 입력해 주세요.", value: 2 },
            maxLength: { message: " 10글자 이하로 입력해 주세요.", value: 10 },
          })}
          type="text"
          placeholder="수정하실 닉네임을 입력해주세요!"
          onChange={onChangeNickname}
        />

        <Button
          width={"16rem"}
          buttonColor={theme.green_500}
          textColor={theme.text_secondary_color}
          useRipple={true}
          rippleColor={theme.text_secondary_color + 50}
          style={{ whiteSpace: "nowrap", fontWeight: FONT_WEIGHT.SEMIBOLD, userSelect: "none" }}
        >
          중복 확인
        </Button>
      </S.EditNicknameActions>

      <S.EditNicknameWarningWrapper>
        <InputLabel
          text="이것은 경고 문자"
          type="danger"
        />
      </S.EditNicknameWarningWrapper>
    </S.EditNickNameContainer>
  );
};

export default EditNickname;
