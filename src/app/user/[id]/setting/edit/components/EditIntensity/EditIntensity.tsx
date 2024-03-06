import { Check } from "@/components/icons";
import * as GS from "../../UserEdit.styles";
import * as S from "./EditIntensity.styles";
import useTheme from "@/lib/hooks/useTheme";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { INTENSITY_OPTIONS } from "@/lib/constants/variable";
import { IntensityOption } from "@/types/OriginDataType";

interface EditIntensityProps {
  register: UseFormRegister<UserEditData>;
  selectedIntensity: IntensityOption;
}

const EditIntensity = ({ register, selectedIntensity }: EditIntensityProps) => {
  return (
    <GS.UserEditSectionContainer>
      <S.IntensityTitle>평소 운동 강도</S.IntensityTitle>
      <S.IntensityDescription>
        기초 대사량 계산에 필요한 활동 계수를 설정해요.
      </S.IntensityDescription>

      <S.IntensityOptionList>
        {INTENSITY_OPTIONS.map(({ label, value }) => (
          <IntensityItem
            key={value}
            value={value}
            optionDescription={label}
            isSelected={selectedIntensity === value}
            register={register("intensity")}
          />
        ))}
      </S.IntensityOptionList>
    </GS.UserEditSectionContainer>
  );
};

export default EditIntensity;

interface IntensityItemProps {
  key?: string | number;
  value: string;
  optionDescription: string;
  isSelected: boolean;
  register: UseFormRegisterReturn;
}

const IntensityItem = ({ isSelected, value, optionDescription, register }: IntensityItemProps) => {
  const theme = useTheme();

  return (
    <S.IntensityItemContainer>
      <input
        id={`intensity_${value}`}
        type="radio"
        style={{ display: "none" }}
        value={value}
        {...register}
      />
      <S.IntensityItemLabel htmlFor={`intensity_${value}`}>
        <S.IntensityItemCircle $isSelected={isSelected}>
          <Check
            className={`w-6 h-6 mx-auto my-auto transition-colors`}
            stroke={isSelected ? theme?.white_100 : theme?.gray_300}
            strokeWidth={3.5}
          />
        </S.IntensityItemCircle>
        <S.IntensityOptionDescription>{optionDescription}</S.IntensityOptionDescription>
      </S.IntensityItemLabel>
    </S.IntensityItemContainer>
  );
};
