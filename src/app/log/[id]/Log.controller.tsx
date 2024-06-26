"use client";

import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { MasilDetailResponse } from "@/types/Response";

import useLogModel from "./Log.model";
import { TabType } from "./Log.types";
import LogView from "./Log.view";

interface LogControllerProps {
  masilData: MasilDetailResponse;
  logId: string;
}

const LogController = ({ masilData, logId }: LogControllerProps) => {
  const {
    tabIndex,
    setTabIndex,
    currentPinIndex,
    setCurrentPinIndex,
    mapCenter,
    setMapCenter,
    baseLocation,
    userInfo,
  } = useLogModel({ masilData });
  const { setIsOutCenter } = useMasilMapStore();

  const handleCurrentPinIndex = (PinIndex: number) => {
    setCurrentPinIndex(PinIndex);
    setTabIndex(TabType.Pin);

    if (masilData.pins.length === 0) {
      return;
    }

    const { point } = masilData.pins[PinIndex];
    setMapCenter(point);
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
      if (masilData.pins.length === 0) {
        setTabIndex(index);
        return;
      }

      const { point } = masilData.pins[0];
      setCurrentPinIndex(0);
      setMapCenter(point);
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
