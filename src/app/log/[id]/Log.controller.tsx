"use client";

import useLogModel from "./Log.model";
import LogView from "./Log.view";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { TabType } from "./Log.types";

interface LogControllerProps {
  logId: string;
}

const LogController = ({ logId }: LogControllerProps) => {
  const {
    masilData,
    tabIndex,
    setTabIndex,
    currentPinIndex,
    setCurrentPinIndex,
    mapCenter,
    setMapCenter,
    baseLocation,
    userInfo,
  } = useLogModel({ logId });
  const { setIsOutCenter } = useMasilMapStore();

  if (!masilData) {
    return;
  }

  const handleCurrentPinIndex = (PinIndex: number) => {
    setCurrentPinIndex(PinIndex);
    setTabIndex(TabType.Pin);

    if (masilData.pins.length === 0) {
      return;
    }

    const { lat, lng } = masilData.pins[PinIndex].point;
    setMapCenter({ lat, lng });
    setIsOutCenter(false);
  };

  const handleClickCenter = () => {
    setCurrentPinIndex(-1);
    setTabIndex(TabType.Memo);
    setMapCenter(baseLocation);
    setIsOutCenter(false);
  };

  const handleClickTab = (index: number) => {
    if (TabType.Pin === index) {
      const { lat, lng } = masilData.pins[0].point;
      setCurrentPinIndex(0);
      setMapCenter({ lat, lng });
      setIsOutCenter(false);
    }

    if (index > 1) {
      return;
    }

    setTabIndex(index);
  };

  return (
    <LogView
      masilData={masilData}
      logId={logId}
      userInfo={userInfo}
      tabIndex={tabIndex}
      setTabIndex={setTabIndex}
      currentPinIndex={currentPinIndex}
      mapCenter={mapCenter}
      handleCurrentPinIndex={handleCurrentPinIndex}
      handleClickCenter={handleClickCenter}
      handleClickTab={handleClickTab}
    />
  );
};

export default LogController;
