import * as S from "./ListCard.styles";
import { Heart } from "../icons";
import { CSSProperties } from "react";
import { convertSeconds } from "@/utils/convertSeconds";
import { convertMeter } from "@/utils/convertMeter";

export interface ListCardProps {
  isRecruit: boolean;
  isLiked: boolean;
  likeCount: number;
  title: string;
  content: string;
  thumbnailURL: string;
  address: string;
  totalTime: number;
  distance: number;
  style?: CSSProperties;
}

const ListCard = ({
  isRecruit,
  isLiked,
  likeCount,
  title,
  content,
  thumbnailURL,
  address,
  totalTime,
  distance,
  style,
}: ListCardProps) => {
  // 좋아요 증가 혹은 감소 시켜주는 함수
  const handleToggleLikes = () => {};

  return (
    <S.ListCardContainer style={style}>
      <S.ListCardThumbnail
        thumbnailURL={thumbnailURL}
        isRecruit={isRecruit}
        isLiked={isLiked}
        likeCount={likeCount}
      >
        <div className="topInfoSection">
          {isRecruit && <span className="recruit">모집중</span>}
          <div
            className="like"
            onClick={handleToggleLikes}
          >
            <Heart />
            <span>{likeCount > 999 ? "999+" : likeCount}</span>
          </div>
        </div>
      </S.ListCardThumbnail>
      <S.ListCardContent>
        <div className="contentTitleWrapper">
          <h3>{title}</h3>
          <h5>{content}</h5>
        </div>
        <div className="contentInfoWrapper">
          <strong>{address}</strong>
          <ul>
            <li>{convertSeconds(totalTime)}</li>
            <li>{convertMeter(distance)}</li>
          </ul>
        </div>
      </S.ListCardContent>
    </S.ListCardContainer>
  );
};

export default ListCard;
