import * as S from "./CustomPin.styles";

import { KakaoPosition } from "@/types/OriginDataType";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { OnClickPin } from "../../MasilMap.types";

interface CustomPinProps {
  position: KakaoPosition;
  size?: number;

  onClickPin?: OnClickPin;
}

const CustomPin = ({ position, size = 24, onClickPin }: CustomPinProps) => {
  return (
    <CustomOverlayMap position={position}>
      <S.CustomPinLayout
        $size={size}
        onClick={onClickPin && onClickPin}
      >
        {/* 추후 Pin 디자인 확정시 변경  */}
        Pin
      </S.CustomPinLayout>
    </CustomOverlayMap>
  );
};

export default CustomPin;
