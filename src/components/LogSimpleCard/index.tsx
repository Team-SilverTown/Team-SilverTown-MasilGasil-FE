"use client";

import { CSSProperties } from "react";
import { LogSimpleCardContainer, LogSimpleCardBotton } from "./LogSimpleCard.style";

interface LogSimpleCardProps {
  width?: string;
  height?: string;
  radius?: string;
  thumbnail: string;
  location_1: string;
  location_2: string;
  total_time: string;
  distance: string;
  created_at: string;
  style?: CSSProperties;
  onClick: () => void;
}

const LogSimpleCard = ({
  width = "120px",
  height = "120px",
  radius = "8px",
  thumbnail,
  location_1,
  location_2,
  total_time,
  distance,
  created_at,
  style,
  onClick,
}: LogSimpleCardProps) => {
  return (
    <LogSimpleCardContainer
      width={width}
      height={height}
      radius={radius}
      thumbnail={thumbnail}
      style={style}
      onClick={onClick}
    >
      <LogSimpleCardBotton>
        <strong>
          {location_1} {location_2}
        </strong>
        <div className="simplelog-Info">
          <ul>
            <li>{total_time}</li>
            <li>{distance}</li>
          </ul>
          <strong>{created_at}</strong>
        </div>
      </LogSimpleCardBotton>
    </LogSimpleCardContainer>
  );
};

export default LogSimpleCard;
