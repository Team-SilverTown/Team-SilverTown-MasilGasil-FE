"use client";

import Theme from "@/styles/theme";

import { useCallback } from "react";
import { Polyline } from "react-kakao-maps-sdk";

import { GeoPosition } from "@/types/OriginDataType";

import { OnCreatePathLine, PathLineWeight } from "../../MasilMap.types";

interface PathLineProps {
  path: GeoPosition[];
  onCreatePathLine?: OnCreatePathLine;

  pathColor?: string;
  pathWeight?: PathLineWeight;
  pathOpacity?: number;
}

const PathLine = ({
  path,
  onCreatePathLine,
  pathColor = Theme.lightTheme.green_300,

  pathOpacity = 0.9,
  pathWeight = 8,
}: PathLineProps) => {
  /**
   * @summary 경로가 추가되거나 그려질때 발동하는 onCreate 함수의 핸들러입니다.
   *
   * ( 무한 렌더링 발생으로 useCallback 사용 )
   */
  const handleCreate = useCallback(
    (polyline: kakao.maps.Polyline) => {
      if (!onCreatePathLine) {
        return;
      }

      onCreatePathLine(polyline);
    },
    [path],
  );
  return (
    <Polyline
      path={path}
      strokeColor={pathColor}
      strokeStyle="solid"
      strokeWeight={pathWeight}
      strokeOpacity={pathOpacity}
      onCreate={handleCreate}
    />
  );
};

export default PathLine;
