import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserEdit.styles";

import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IntensityType, UserEditData } from "./UserEdit.types";

import { EditSex, EditNickname, EditBirthDay, EditBodyInfo, EditIntensity } from "./components";
import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { IntensityOption } from "@/types/OriginDataType";

interface UserEditViewProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;

  onSubmit: UseFormHandleSubmit<UserEditData>;
  onValid: (data: UserEditData) => void;
  onInValid: (error: FieldErrors) => void;

  selectedSex: string;
  selectedIntensity: IntensityOption;
  isCheckedNickname: boolean;
  onCheckSameNickname: () => void;
}

const UserEditView = ({
  register,
  errors,

  onSubmit,
  onValid,
  onInValid,

  selectedSex,
  selectedIntensity,
  isCheckedNickname,
  onCheckSameNickname,
}: UserEditViewProps) => {
  const theme = useTheme();

  return (
    <GS.CommonContainer
      style={{ height: "100%" }}
      onSubmit={onSubmit(onValid, onInValid)}
    >
      <S.UserEditLayout
        initial={{ x: "-120%" }}
        animate={{ x: 0 }}
      >
      <S.UserEditLayout
        initial={{ x: "-120%" }}
        animate={{ x: 0 }}
      >
        <EditNickname
          register={register}
          errors={errors}
          isCheckedNickname={isCheckedNickname}
          onCheckSameNickname={onCheckSameNickname}
        />

        <EditSex
          register={register}
          selectedSex={selectedSex}
        />

        <EditBirthDay
          register={register}
          errors={errors}
        />
        <EditBirthDay
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

        <Button
          variant="flat"
          useRipple
          rippleColor={theme?.text_secondary_color + 50}
          buttonColor={theme?.green_500}
          textColor={theme?.text_secondary_color}
          style={{
            fontSize: FONT_SIZE.H4,
            fontWeight: FONT_WEIGHT.BOLD,
            minHeight: "5rem",
          }}
        >
          수정 완료
        </Button>
      </S.UserEditLayout>
    </GS.CommonContainer>
  );
};

export default UserEditView;
