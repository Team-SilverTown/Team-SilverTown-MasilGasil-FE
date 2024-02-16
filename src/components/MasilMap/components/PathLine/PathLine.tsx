import { KakaoFormatPosition } from "@/types/OriginDataType";
import { Polyline } from "react-kakao-maps-sdk";
import { OnCreatePathLine, PathLineWeight } from "../../MasilMap.types";

interface PathLineProps {
  path: KakaoFormatPosition[];
  onCreatePathLine?: OnCreatePathLine;

  // style
  pathColor?: string;
  pathWeight?: PathLineWeight;
  pathOpacity?: number;
}

const PathLine = ({
  path,
  onCreatePathLine,
  pathColor = "#7cbe13",
  pathOpacity = 0.7,
  pathWeight = 8,
}: PathLineProps) => {
  return (
    <Polyline
      path={path}
      strokeColor={pathColor}
      strokeStyle="solid"
      strokeWeight={pathWeight}
      strokeOpacity={pathOpacity}
      onCreate={onCreatePathLine && onCreatePathLine}
    />
  );
};

export default PathLine;
