import { Check } from "@/components/icons";
import * as GS from "../../UserEdit.styles";
import * as S from "./EditIntensity.styles";
import useTheme from "@/lib/hooks/useTheme";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { IntensityType, UserEditData } from "../../UserEdit.types";

interface EditIntensityProps {
  register: UseFormRegister<UserEditData>;
  selectedIntensity: IntensityType;
}

const EditIntensity = ({ register, selectedIntensity }: EditIntensityProps) => {
  const exerciseIntensity = [
    { label: "좌식", value: "SUPER_LOW" },
    { label: "가벼운 활동(가벼운 운동/스포츠 3-5일/주)", value: "LOW" },
    { label: "적당히 활동적(중간 정도의 운동/스포츠 3-5일/주)", value: "MIDDLE" },
    { label: "활동적(일주일에 6-7일 격렬한 운동/스포츠)", value: "HIGH" },
    { label: "매우 활독적인 경우 (매우 힘든 운동/스포츠 및 육체 노동)", value: "SUPER_HIGH" },
  ];

  return (
    <GS.UserEditSectionContainer>
      <S.IntensityTitle>평소 운동 강도</S.IntensityTitle>
      <S.IntensityDescription>
        기초 대사량 계산에 필요한 활동 계수를 설정해요.
      </S.IntensityDescription>

      <S.IntensityOptionList>
        {exerciseIntensity.map(({ label, value }) => (
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

  if (!theme) {
    return;
  }

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
            stroke={isSelected ? theme.white_100 : theme.gray_300}
            strokeWidth={3.5}
          />
        </S.IntensityItemCircle>
        <S.IntensityOptionDescription>{optionDescription}</S.IntensityOptionDescription>
      </S.IntensityItemLabel>
    </S.IntensityItemContainer>
  );
};
