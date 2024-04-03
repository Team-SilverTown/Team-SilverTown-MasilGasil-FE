"use client";

import * as S from "./UserIntensityItem.styles";

import { UseFormRegisterReturn } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Check } from "../icons";

interface IntensityItemProps {
  key?: string | number;
  value: string;
  optionDescription: string;
  isSelected: boolean;
  register: UseFormRegisterReturn;
}

const UserIntensityItem = ({
  value,
  optionDescription,
  isSelected,
  register,
}: IntensityItemProps) => {
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
        <S.IntensityOptionDescription className="scrollbar-hide">
          {optionDescription}
        </S.IntensityOptionDescription>
      </S.IntensityItemLabel>
    </S.IntensityItemContainer>
  );
};

export default UserIntensityItem;
