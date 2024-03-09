"use client";

import useTheme from "@/lib/hooks/useTheme";
import * as S from "./PinEditSlideButton.styles";
import { SlideButton } from "..";
import { Pin } from "@/types/OriginDataType";
import EditPencil from "../icons/EditPencil";

interface PinEditSlideButtonProps {
  key?: string | number;
  pinIndex: number;
  pin: Pin;
  onClickPin: (pinIndex: number) => void;
  removePin: (pinIndex: number) => void;
}

const PinEditSlideButton = ({ pinIndex, onClickPin, removePin, pin }: PinEditSlideButtonProps) => {
  const theme = useTheme();

  return (
    <S.PinEditItem>
      <S.PinIndex $backgroundColor={theme?.green_500}>{pinIndex + 1}</S.PinIndex>

      <SlideButton
        subChildren={"삭제"}
        onButtonClickHandler={() => {
          onClickPin(pinIndex);
        }}
        onSubButtonClickHandler={() => {
          removePin(pinIndex);
        }}
      >
        <S.SlideButtonContent $textColor={pin.content ? theme?.black : theme?.gray_300}>
          {pin.content ? pin.content : "내용을 작성해주세요"}
          <EditPencil
            fill={theme?.gray_300}
            width="2.3rem"
          />
        </S.SlideButtonContent>
      </SlideButton>
    </S.PinEditItem>
  );
};

export default PinEditSlideButton;
