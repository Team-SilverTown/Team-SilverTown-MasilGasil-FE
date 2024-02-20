import Theme from "@/styles/theme";
import * as S from "./CenterMarker.styles";

import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { GeoPosition } from "@/types/OriginDataType";

interface CenterMarkerProps {
  size?: number;
  fill?: string;
  position: GeoPosition;
}

const CenterMarker = ({
  position,
  size = 32,
  fill = Theme.lightTheme.black,
}: CenterMarkerProps) => {
  return (
    <CustomOverlayMap position={position}>
      <S.CenterMarkerLayout
        $width={size}
        $height={size}
      >
        <svg
          id="Icons_Walk"
          overflow="hidden"
          version="1.1"
          viewBox="0 0 96 96"
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
        >
          <g>
            <circle
              cx="53"
              cy="13"
              r="8"
            />
            <path d=" M 73.3 44.2 L 63 40.8 C 63 40.8 57.3 27.6 57.1 27.2 C 55.7 24.7 53.1 23 50.1 23 C 48.9 23 47.7 23.3 46.7 23.8 L 32.7 29.3 C 31.7 29.7 30.9 30.5 30.5 31.5 L 25.5 43.5 C 24.7 45.5 25.6 47.9 27.7 48.7 C 28.2 48.9 28.7 49 29.2 49 C 30.8 49 32.3 48.1 32.9 46.5 L 37 36.1 L 41.2 34.5 L 34.3 68.2 L 20.9 84.5 C 19.5 86.2 19.7 88.7 21.4 90.1 C 22.1 90.7 23 91 23.9 91 C 25.1 91 26.2 90.5 27 89.5 L 41 72.5 C 41.4 72 41.7 71.4 41.8 70.8 L 44.2 59.2 L 55 67 L 55 87 C 55 89.2 56.8 91 59 91 C 61.2 91 63 89.2 63 87 L 63 65 C 63 63.7 62.4 62.5 61.4 61.8 L 51.7 54.7 L 54.4 41.2 L 56.3 45.6 C 56.8 46.6 57.6 47.4 58.7 47.8 L 70.7 51.8 C 71.1 51.9 71.5 52 72 52 C 73.7 52 75.2 50.9 75.8 49.3 C 76.5 47.2 75.4 44.9 73.3 44.2 Z" />
          </g>
        </svg>
      </S.CenterMarkerLayout>
    </CustomOverlayMap>
  );
};

export default CenterMarker;
