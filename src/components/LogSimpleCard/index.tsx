"use client";

import { CSSProperties } from "react";
import {
  LogSimpleCardContainer,
  LogSimpleCardBottom,
  LogSimpleCardInfo,
} from "./LogSimpleCard.style";

export interface LogSimpleCardProps {
  width?: number | string;
  height?: number | string;
  radius?: string;
  thumbnailUrl: string | null;
  depth1: string;
  depth2: string;
  totalTime: string;
  distance: string;
  startedAt: string;
  style?: CSSProperties;
  onClick: () => void;
}

const LogSimpleCard = ({
  width = 160,
  height = 160,
  radius = "8",
  thumbnailUrl,
  depth1,
  depth2,
  totalTime,
  distance,
  startedAt,
  style,
  onClick,
}: LogSimpleCardProps) => {
  return (
    <LogSimpleCardContainer
      $width={width}
      $height={height}
      $radius={radius}
      $thumbnailUrl={thumbnailUrl}
      style={style}
      onClick={onClick}
    >
      <LogSimpleCardBottom>
        <strong>
          {depth1} {depth2}
        </strong>
        <LogSimpleCardInfo>
          <ul>
            <li>{totalTime}</li>
            <li>{distance}</li>
          </ul>
          <strong>{startedAt}</strong>
        </LogSimpleCardInfo>
      </LogSimpleCardBottom>
    </LogSimpleCardContainer>
  );
};

export default LogSimpleCard;
