"use client";

import * as S from "./UserEdit.styles";
import * as GS from "@/styles/GlobalStyle";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { MeResponse } from "@/types/Response";

import useUserEditController from "./UserEdit.controller";
import { EditBirthDate, EditBodyInfo, EditIntensity, EditNickname, EditSex } from "./components";

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
    changeUserData,
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
        initial={{ x: "-120%" }}
        animate={{ x: 0 }}
        className="scrollbar-hide"
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
            width: "90%",
            fontSize: FONT_SIZE.H6,
            fontWeight: FONT_WEIGHT.BOLD,
            minHeight: "5rem",
          }}
          onClickHandler={handleSubmit(handleValid)}
          disabled={!changeUserData}
        >
          {changeUserData ? "수정 완료" : "변경사항이 없습니다."}
        </Button>
      </S.UserEditButtonWrapper>
    </GS.CommonContainer>
  );
};

export default UserEditView;
