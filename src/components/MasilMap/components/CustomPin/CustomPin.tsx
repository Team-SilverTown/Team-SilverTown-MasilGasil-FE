import { KakaoFormatPosition } from "@/types/OriginDataType";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { OnClickPin } from "../../MasilMap.types";
import { MapPin } from "@/components/icons";
import Theme from "@/styles/theme";

interface CustomPinProps {
  position: KakaoFormatPosition;
  size?: number;

  onClickPin?: OnClickPin;
  pinIndex?: number;
  pinColor?: string;
  pinSelectColor?: string;
  pinFontColor?: string;
  isSelected?: boolean;

  key?: string;
}

const CustomPin = ({
  position,
  size = 36,
  onClickPin,
  pinIndex,
  pinColor = Theme.lightTheme.yellow_500,
  pinSelectColor,
  pinFontColor,
  isSelected,
}: CustomPinProps) => {
  return (
    <CustomOverlayMap position={position}>
      <MapPin
        onClickPin={onClickPin && onClickPin}
        size={size}
        fill={pinColor}
        pinIndex={pinIndex}
        selectColor={pinSelectColor}
        isSelected={isSelected}
        fontColor={pinFontColor}
      />
    </CustomOverlayMap>
  );
};

export default CustomPin;
