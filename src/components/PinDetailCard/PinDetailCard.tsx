"use client";

import Image from "next/image";
import * as S from "./PinDetailCard.styles";
import { Pin } from "@/types/OriginDataType";
import { useUI } from "../uiContext/UiContext";

export interface PinDetailCardProps {
  key?: number;
  className?: string;
  borderRadius?: number | string;
  title?: string;
  content: string;
  thumbnailUrl: string | null;
  currentPinindex: number;
  totalPinIndex: number;
  pin: Pin;
}

const PinDetailCard = ({
  borderRadius = 8,
  className,
  title,
  content,
  thumbnailUrl,
  currentPinindex,
  totalPinIndex,
  pin,
}: PinDetailCardProps) => {
  const { openModal, setModalView } = useUI();

  const handleClickNavigationPin = () => {
    setModalView("PIN_DETAIL_MODAL_VIEW");
    openModal({
      pin,
    });
  };

  return (
    <S.PinDetailCardLayout
      $borderRadius={borderRadius}
      className={className}
    >
      <S.PinDetailCardWrapper $borderRadius={borderRadius}>
        <S.PinDetailCardThumbnail
          $borderRadius={borderRadius}
          onClick={handleClickNavigationPin}
        >
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={content}
              sizes="100%"
              fill
              priority
            />
          ) : (
            <S.PinDetailCardThumbnailEmpty />
          )}
          <span>
            {currentPinindex}/{totalPinIndex}
          </span>
        </S.PinDetailCardThumbnail>
        <S.PinDetailCardContent
          className="scrollbar-hide"
          $borderRadius={borderRadius}
        >
          <h5>{title}</h5>
          <p>{content}</p>
        </S.PinDetailCardContent>
      </S.PinDetailCardWrapper>
    </S.PinDetailCardLayout>
  );
};

export default PinDetailCard;
