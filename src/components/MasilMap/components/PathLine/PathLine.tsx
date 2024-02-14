import { KakaoPosition } from "@/types/OriginDataType";
import { Polyline } from "react-kakao-maps-sdk";
import { OnCreatePath, PathLineWeight } from "../../MasilMap.types";

interface PathLineProps {
  path: KakaoPosition[];
  onCreatePath?: OnCreatePath;

  // style
  pathColor?: string;
  pathWeight?: PathLineWeight;
  pathOpacity?: number;
}

const PathLine = ({
  path,
  onCreatePath,
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
      onCreate={onCreatePath && onCreatePath}
    />
  );
};

export default PathLine;
