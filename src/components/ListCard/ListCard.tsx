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
  /**
   *
   * @param sec 1초 단위로 전달되는 매개변수 입니다.
   * @returns 산책 시간이 1분 미만이라면 1분을 보여줍니다.
   *          산책 시간이 1시간 미만이라면 분만 보여줍니다.
   *          산책 시간이 1시간 이상이라면 시간, 분을 같이 보여줍니다.
   */

  function convertSeconds(sec: number) {
    let minutes = Math.round(sec / 60);
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    if (sec < 60) return `1분`;
    if (hours === 0) return `${minutes}분`;
    return `${hours}시간 ${minutes}분`;
  }

  /**
   *
   * @param meter 1m 단위로 전달되는 매개변수 입니다.
   * @returns 1km 이상인 경우에는 소숫점 한 자리까지 반올림하여 거리를 km로 보여주고,
   *          미만인 경우 전달 받은 meter그대로 m 단위로 보여줍니다.
   */
  function convertMeter(meter: number) {
    const distance = Number((meter / 1000).toFixed(1));
    if (meter >= 1000) {
      return `${distance}km`;
    }
    return `${meter}m`;
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
            <li>{convertSeconds(totalTime)}</li>
            <li>{convertMeter(distance)}</li>
          </ul>
        </div>
      </S.ListCardContent>
    </S.ListCardContainer>
  );
};

export default ListCard;
