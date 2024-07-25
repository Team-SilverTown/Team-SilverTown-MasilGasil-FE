"use client";

import * as S from "./LogDetailCard.style";

import { CSSProperties, useState } from "react";

import { UserAddressType } from "@/types/OriginDataType/Location";
import { MeResponse } from "@/types/Response";

import { Heart, KebabMenu } from "../icons";

import { RulerIcon, TimerIcon } from "lucide-react";
import Image from "next/image";

export interface LogDetailCardProps {
  title: string;
  content: string;
  thumbnailUrl: string | null;
  distance: string;
  totalDistance?: number;
  totalTime: string;
  likeCount?: number;
  address?: UserAddressType;
  isLikeLayout?: boolean;
  isSettingLayout?: boolean;
  userInfo?: MeResponse;
  style?: CSSProperties;
  onDetailClick?: () => void;
}
const LogDetailCard = ({
  title,
  content,
  thumbnailUrl,
  distance,
  totalTime,
  likeCount,
  address,
  isLikeLayout = false,
  isSettingLayout = false,
  style,
  onDetailClick,
}: LogDetailCardProps) => {
  const [isSettingToggle, setIsSettingToggle] = useState(false);

  const handleDetailViewClick = () => {
    if (isSettingToggle) {
      setIsSettingToggle(false);
      return;
    }
    onDetailClick && onDetailClick();
  };
  const handleSettingToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsSettingToggle(true);
  };
  const handleLogDetailCardEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    // console.log("Log Detail 수정 !!");
    setIsSettingToggle(false);
  };
  const handleLogDetailCardDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    // console.log("Log Detail 삭제 !!");
    setIsSettingToggle(false);
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
        <div className="flex flex-col gap-3">
          <div className="infoTitle">
            <h3>{title}</h3>
            {isSettingLayout && (
              <button onClick={handleSettingToggle}>
                <KebabMenu />
              </button>
            )}
          </div>
          {address && (
            <span className="text-small font-semibold text-gray-300">
              {address.depth1} {address.depth2}
            </span>
          )}
        </div>

        <S.LogDetailCardInfoContent>
          <div className="flex flex-col gap-1">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <TimerIcon size={15} />
                {totalTime}
              </span>
              <span className="flex items-center gap-1">
                <RulerIcon size={15} />
                {distance}
              </span>
            </div>
          </div>
          {isLikeLayout && (
            <div className="z-10 flex items-center gap-1">
              <Heart
                width={15}
                height={15}
                fill={"#be185d"}
                stroke={"white"}
              />
              <div className="font-black text-pink-700">
                {!likeCount ? 0 : likeCount > 999 ? "+999" : likeCount}
              </div>
            </div>
          )}
        </S.LogDetailCardInfoContent>
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
