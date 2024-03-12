"use client";

import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserEdit.styles";

import { EditSex, EditNickname, EditBirthDate, EditBodyInfo, EditIntensity } from "./components";
import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { MeResponse } from "@/types/Response";
import useUserEditController from "./UserEdit.controller";

interface UserEditViewProps {
  userDefaultData: MeResponse;
}

const UserEditView = ({ userDefaultData }: UserEditViewProps) => {
  const theme = useTheme();
  const {
    register,
    errors,
    isCheckedNickname,
    nickNameButtonDisabled,
    selectedSex,
    selectedIntensity,
    handleCheckSameNickName,
    handleSubmit,
    handleValid,
  } = useUserEditController({ userDefaultData });

  return (
    <GS.CommonContainer
      style={{
        width: "100%",
        height: "100%",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <S.UserEditLayout
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <EditNickname
          register={register}
          errors={errors}
          nickNameButtonDisabled={nickNameButtonDisabled}
          isCheckedNickname={isCheckedNickname}
          onCheckSameNickname={handleCheckSameNickName}
        />

        <EditSex
          register={register}
          selectedSex={selectedSex}
        />

        <EditBirthDate
          register={register}
          errors={errors}
        />

        <EditBodyInfo
          register={register}
          errors={errors}
        />

        <EditIntensity
          register={register}
          selectedIntensity={selectedIntensity}
        />
      </S.UserEditLayout>

      <S.UserEditButtonWrapper>
        <Button
          variant="flat"
          useRipple
          rippleColor={theme?.text_secondary_color + 50}
          buttonColor={theme?.green_500}
          textColor={theme?.text_secondary_color}
          style={{
            width: "100%",
            fontSize: FONT_SIZE.H4,
            fontWeight: FONT_WEIGHT.BOLD,
            minHeight: "5rem",
          }}
          onClickHandler={handleSubmit(handleValid)}
        >
          수정 완료
        </Button>
      </S.UserEditButtonWrapper>
    </GS.CommonContainer>
  );
};

export default UserEditView;
