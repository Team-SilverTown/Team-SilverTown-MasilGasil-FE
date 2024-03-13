import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { OnClickPin } from "../../MasilMap.types";
import { MapPin } from "@/components/icons";
import Theme, { Z_INDEX } from "@/styles/theme";
import { GeoPosition } from "@/types/OriginDataType";

interface CustomPinProps {
  position: GeoPosition;
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
        style={{
          position: "relative",
          zIndex: Z_INDEX.CUSTOM_PIN,
        }}
      />
    </CustomOverlayMap>
  );
};

export default CustomPin;
