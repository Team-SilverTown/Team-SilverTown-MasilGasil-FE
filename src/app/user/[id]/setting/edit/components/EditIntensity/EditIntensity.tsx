"use client";

import * as GS from "../../UserEdit.styles";
import * as S from "./EditIntensity.styles";

import { UseFormRegister } from "react-hook-form";

import { UserIntensityItem } from "@/components";
import { INTENSITY_OPTIONS } from "@/lib/constants/variable";
import { IntensityOption } from "@/types/OriginDataType";
import { MeResponse } from "@/types/Response";

interface EditIntensityProps {
  register: UseFormRegister<MeResponse>;
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
          <UserIntensityItem
            key={value}
            value={value}
            optionDescription={label}
            isSelected={selectedIntensity === value}
            register={register("exerciseIntensity")}
          />
        ))}
      </S.IntensityOptionList>
    </GS.UserEditSectionContainer>
  );
};

export default EditIntensity;
