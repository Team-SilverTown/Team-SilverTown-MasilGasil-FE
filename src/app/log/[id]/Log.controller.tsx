"use client";

import useLogModel from "./Log.model";
import LogView from "./Log.view";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { MASILS_DATA, USER_DUMMY_DATA } from "./Log.constants";
import { GeoPosition } from "@/types/OriginDataType";
import { TabType } from "./Log.types";

interface LogControllerProps {
  baseLocation: GeoPosition;
}

const LogController = ({ baseLocation }: LogControllerProps) => {
  const { tabIndex, setTabIndex, currentPinIndex, setCurrentPinIndex, mapCenter, setMapCenter } =
    useLogModel({ baseLocation });
  const { setIsOutCenter } = useMasilMapStore();

  const handlePinIndex = (PinIndex: number) => {
    setCurrentPinIndex(PinIndex);
    setTabIndex(TabType.Pin);

    if (MASILS_DATA.pins.length === 0) {
      return;
    }

    const { lat, lng } = MASILS_DATA.pins[PinIndex].point;
    setMapCenter({ lat, lng });
    setIsOutCenter(false);
  };

  const handleClickCenter = () => {
    setCurrentPinIndex(0);
    setTabIndex(TabType.Memo);
    setMapCenter(baseLocation);
    setIsOutCenter(false);
  };
  return (
    <LogView
      masilsData={MASILS_DATA}
      userInfo={USER_DUMMY_DATA}
      tabIndex={tabIndex}
      setTabIndex={setTabIndex}
      currentPinIndex={currentPinIndex}
      mapCenter={mapCenter}
      handlePinIndex={handlePinIndex}
      handleClickCenter={handleClickCenter}
    />
  );
};

export default LogController;
