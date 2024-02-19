import * as S from "./ListCard.styles";
import { Heart } from "../icons";

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
}: ListCardProps) => {
  function convertMinutes(mins: number) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    if (hours > 0) {
      return `${hours}시간 ${minutes}분`;
    }
    return `${minutes}분`;
  }

  function convertMeter(meter: number) {
    const distance = Number((meter / 1000).toFixed(1));
    if (distance > 0) {
      return `${distance}km`;
    }
    return `${distance}m`;
  }

  return (
    <S.ListCardContainer>
      <S.ListCardThumbnail
        thumbnailURL={thumbnailURL}
        isRecruit={isRecruit}
        isLiked={isLiked}
        likeCount={likeCount}
      >
        <div className="topInfoSection">
          <span className="recruit">{isRecruit ? "모집중" : "모집완료"}</span>
          <div className="like">
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
            <li>{convertMinutes(totalTime)}</li>
            <li>{convertMeter(distance)}</li>
          </ul>
        </div>
      </S.ListCardContent>
    </S.ListCardContainer>
  );
};

export default ListCard;
