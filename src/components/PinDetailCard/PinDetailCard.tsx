"use client";

import * as S from "./PinDetailCard.styles";

import { Image as ImageIcon } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";
import { Pin } from "@/types/OriginDataType";

import { useUI } from "../uiContext/UiContext";

import Image from "next/image";

export interface PinDetailCardProps {
  key?: number;
  className?: string;
  borderRadius?: number | string;
  title?: string;
  content: string;
  thumbnailUrl: string | null;
  currentPinindex: number;
  totalPinIndex: number;
  pin?: Pin;
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
  const theme = useTheme();
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
      onClick={handleClickNavigationPin}
      className={className}
    >
      <S.PinDetailCardWrapper $borderRadius={borderRadius}>
        <S.PinDetailCardThumbnail $borderRadius={borderRadius}>
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={content}
              sizes="100%"
              fill
              priority
            />
          ) : (
            <S.PinDetailCardThumbnailEmpty>
              <ImageIcon
                width={40}
                fill={theme?.gray_300}
              />
            </S.PinDetailCardThumbnailEmpty>
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
