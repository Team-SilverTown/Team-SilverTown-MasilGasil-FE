import { CSSProperties, useState } from "react";
import {
  LogDetailCardContainer,
  LogDetailCardThumbnail,
  LogDetailCardInfo,
  LogDetailCardSettingModal,
} from "./LogDetailCard.style";
import { Heart, KebabMenu } from "../icons";

interface LogDetailCardProps {
  title: string;
  content: string;
  thumbnailURL: string;
  distance: string;
  total_time: string;
  like_cnt: number;
  isLiked: boolean;
  isLikeLayout: boolean;
  isSettingLayout: boolean;
  style?: CSSProperties;
  onDetailClick: () => void;
  onLikeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const LogDetailCard = ({
  title,
  content,
  thumbnailURL,
  distance,
  total_time,
  like_cnt,
  isLiked,
  isLikeLayout,
  isSettingLayout,
  style,
  onDetailClick,
  onLikeClick,
}: LogDetailCardProps) => {
  const [isSettingToggle, setIsSetingToggle] = useState(false);

  const handleDetailViewClick = () => {
    if (isSettingToggle) {
      setIsSetingToggle(false);
      return;
    }
    onDetailClick();
  };

  const handleSettingToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsSetingToggle(true);
  };

  const handleLogDetailCardEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log("Log Detail 수정 !!");
    setIsSetingToggle(false);
  };

  const handleLogDetailCardDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log("Log Detail 삭제 !!");
    setIsSetingToggle(false);
  };

  return (
    <LogDetailCardContainer
      style={style}
      onClick={handleDetailViewClick}
    >
      <LogDetailCardThumbnail thumbnailURL={thumbnailURL} />
      <LogDetailCardInfo isSettingLayout={isSettingLayout}>
        <div className="infoTopSection">
          <div className="infoTitle">
            <h3>{title}</h3>
            {isSettingLayout && <KebabMenu onClick={handleSettingToggle} />}
          </div>
          <p>{content}</p>
        </div>
        <div className="infoContent">
          <ul className="walkInfo">
            <li>{total_time}</li>
            <li>{distance}</li>
            <li>244kcal</li>
          </ul>
          {isLikeLayout && (
            <div
              className={`likeInfo ${isLiked ? "liked" : ""}`}
              onClick={onLikeClick}
            >
              <Heart
                width={11}
                height={10}
              />
              <div className="like">{like_cnt < 999 ? <Heart /> : "+999"}</div>
            </div>
          )}
        </div>
        {isSettingToggle && (
          <LogDetailCardSettingModal>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={handleLogDetailCardEdit}
                >
                  수정하기
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogDetailCardDelete}
                >
                  삭제하기
                </button>
              </li>
            </ul>
          </LogDetailCardSettingModal>
        )}
      </LogDetailCardInfo>
    </LogDetailCardContainer>
  );
};

export default LogDetailCard;
