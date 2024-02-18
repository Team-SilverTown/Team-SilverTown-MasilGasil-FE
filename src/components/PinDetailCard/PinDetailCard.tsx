import * as S from "./PinDetailCard.styles";

interface PinDetailCardProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  title: string;
  content: string;
  thumbnailURL: string;
  index: number;
  PinTotalLength: number;
}

const PinDetailCard = ({
  width = 390,
  height = 200,
  borderRadius = 8,
  title,
  content,
  thumbnailURL,
  index,
  PinTotalLength,
}: PinDetailCardProps) => {
  return (
    <S.PinDetailCardLayout
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      <S.PinDetailCardThumbnail
        width={width}
        thumbnailURL={thumbnailURL}
        borderRadius={borderRadius}
      >
        <span>
          {index}/{PinTotalLength}
        </span>
      </S.PinDetailCardThumbnail>
      <S.PinDetailCardContent
        width={width}
        borderRadius={borderRadius}
      >
        <h5>{title}</h5>
        <p>{content}</p>
      </S.PinDetailCardContent>
    </S.PinDetailCardLayout>
  );
};

export default PinDetailCard;
