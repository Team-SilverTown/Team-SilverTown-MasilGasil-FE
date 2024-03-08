"use client";

import { useRef, useEffect } from "react";
import * as S from "./PinDetailCard.styles";

export interface PinDetailCardProps {
  key?: number;
  borderRadius?: number | string;
  title?: string;
  content: string;
  thumbnailUrl: string | null;
  currentPinindex: number;
  totalPinIndex: number;
}

const PinDetailCard = ({
  borderRadius = 8,
  title,
  content,
  thumbnailUrl,
  currentPinindex,
  totalPinIndex,
}: PinDetailCardProps) => {
  const PinDetailCardRef = useRef<null | HTMLElement>(null);
  const maxHeight = 244; // 최대 높이를 설정합니다.
  const aspectRatio = 200 / 390; // 가로 세로 비율을 설정합니다.

  useEffect(() => {
    const adjustHeight = () => {
      if (!PinDetailCardRef.current) return;

      const width = PinDetailCardRef.current.offsetWidth; // 컨테이너의 현재 너비를 구합니다.
      let height = width * aspectRatio; // 너비에 비례하여 높이를 계산합니다.

      if (height > maxHeight) {
        height = maxHeight; // 계산된 높이가 최대 높이보다 크면 최대 높이로 설정합니다.
      }

      PinDetailCardRef.current.style.height = `${height}px`; // 높이를 설정합니다.
    };

    window.addEventListener("resize", adjustHeight); // 창 크기가 변경될 때마다 높이를 조정합니다.
    adjustHeight(); // 컴포넌트가 마운트되었을 때 높이를 조정합니다.

    return () => {
      // 컴포넌트가 언마운트되었을 때 이벤트 리스너를 제거하여 메모리 누수를 방지합니다.
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <S.PinDetailCardLayout
      ref={PinDetailCardRef}
      $borderRadius={borderRadius}
    >
      <S.PinDetailCardWrapper $borderRadius={borderRadius}>
        <S.PinDetailCardThumbnail
          $thumbnail={thumbnailUrl}
          $borderRadius={borderRadius}
        >
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
