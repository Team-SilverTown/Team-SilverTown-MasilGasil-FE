"use client";

import { CSSProperties } from "react";

import { convertSeconds, convertMeter } from "@/utils";

import { Heart } from "../icons";
import * as S from "./ListCard.styles";

export interface ListCardProps {
  isRecruit: boolean;
  isLiked: boolean;
  likeCount: number;
  title: string;
  content: string;
  thumbnailUrl: string;
  address: string;
  totalTime: number;
  distance: number;
  style?: CSSProperties;
  onCardClickHandler?: () => void;
  onLikeClickHandler?: () => void;
}

const ListCard = ({
  isRecruit,
  isLiked,
  likeCount,
  title,
  content,
  thumbnailUrl,
  address,
  totalTime,
  distance,
  style,
  onCardClickHandler,
  onLikeClickHandler,
}: ListCardProps) => {
  return (
    <S.ListCardContainer
      style={style}
      onClick={onCardClickHandler}
    >
      <S.ListCardThumbnail
        $thumbnailURL={thumbnailUrl}
        $isRecruit={isRecruit}
        $isLiked={isLiked}
        $likeCount={likeCount}
      >
        <div className="topInfoSection">
          {isRecruit && <span className="recruit">모집중</span>}
          <div
            className="like"
            onClick={onLikeClickHandler}
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
