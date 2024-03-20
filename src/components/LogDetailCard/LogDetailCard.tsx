"use client";
import { CSSProperties, useState } from "react";
import Image from "next/image";
import { calculateWalkingCalories } from "@/utils";
import { MeResponse } from "@/types/Response";
import { Heart, KebabMenu } from "../icons";
import * as S from "./LogDetailCard.style";
export interface LogDetailCardProps {
  title: string;
  content: string;
  thumbnailUrl: string | null;
  distance: string;
  totalDistance?: number;
  totalTime: string;
  likeCount?: number;
  isLiked?: boolean;
  isLikeLayout?: boolean;
  isSettingLayout?: boolean;
  userInfo?: MeResponse;
  style?: CSSProperties;
  onDetailClick?: () => void;
  onLikeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
const LogDetailCard = ({
  title,
  content,
  thumbnailUrl,
  distance,
  totalTime,
  likeCount,
  isLiked,
  isLikeLayout = false,
  isSettingLayout = false,
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
    onDetailClick && onDetailClick();
  };
  const handleSettingToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsSetingToggle(true);
  };
  const handleLogDetailCardEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    setIsSetingToggle(false);
  };
  const handleLogDetailCardDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    setIsSetingToggle(false);
  };
  return (
    <S.LogDetailCardContainer
      style={style}
      onClick={handleDetailViewClick}
    >
      <S.LogDetailCardThumbnail>
        {thumbnailUrl && (
          <Image
            src={thumbnailUrl}
            alt={title}
            sizes="100%"
            fill
            priority
          />
        )}
      </S.LogDetailCardThumbnail>
      <S.LogDetailCardInfo $isSettingLayout={isSettingLayout}>
        <div className="infoTopSection">
          <div className="infoTitle">
            <h3>{title}</h3>
            {isSettingLayout && (
              <button onClick={handleSettingToggle}>
                <KebabMenu />
              </button>
            )}
          </div>
          <p>{content}</p>
        </div>
        <div className="infoContent">
          <ul className="walkInfo">
            <li>{totalTime}</li>
            <li>{distance}</li>
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
              <div className="like">{likeCount && likeCount < 999 ? likeCount : "+999"}</div>
            </div>
          )}
        </div>
        {isSettingToggle && (
          <S.LogDetailCardSettingModal>
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
          </S.LogDetailCardSettingModal>
        )}
      </S.LogDetailCardInfo>
    </S.LogDetailCardContainer>
  );
};
export default LogDetailCard;
