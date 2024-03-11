import { GeoPosition } from "@/types/OriginDataType";
import { OnClickPin } from "../../MasilMap.types";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { Flag } from "@/components/icons";

interface NavigationPinProps {
  position: GeoPosition;
  size?: number;

  onClickPin?: OnClickPin;
  pinIndex?: number;

  key?: string;
}

const NavigationPin = ({ position, size, onClickPin, pinIndex }: NavigationPinProps) => {
  return (
    <CustomOverlayMap position={position}>
      <Flag
        size={size}
        fill={"#909090"}
        onClick={onClickPin}
        pinIndex={pinIndex}
      />
    </CustomOverlayMap>
  );
};

export default NavigationPin;
