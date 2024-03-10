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
