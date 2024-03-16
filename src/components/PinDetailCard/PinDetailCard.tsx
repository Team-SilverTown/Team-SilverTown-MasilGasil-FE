import Image from "next/image";
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
  return (
    <S.PinDetailCardLayout $borderRadius={borderRadius}>
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
