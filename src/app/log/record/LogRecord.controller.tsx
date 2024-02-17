"use client";

import useUserLocationStore from "@/stores/useUserLocationStore";
import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";
import { throttle } from "lodash";
import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";
import { useUI } from "@/components/uiContext/UiContext";

const LogRecordController = () => {
  const { openModal, setModalView, closeModal } = useUI();
  const { userLocation, setUserLocation } = useUserLocationStore();
  const { pageStep, setPageStep, logData, setLogData, watchCode, setWatchCode } =
    useLogRecordModel();
  const router = useRouter();

  /**
   * @summary watcher가 오류가 발생했을때 수행할 동작을 위한 함수입니다.
   * @param PERMISSION_DENIED 사용자가 위치 서비스를 동의 하지 않았는지를 파악할때 code와 비교하는 용도로 사용되어집니다.
   */
  const handleWatchError = ({ code, PERMISSION_DENIED }: GeolocationPositionError) => {
    if (code === PERMISSION_DENIED) {
      console.log("사용자가 위치 서비스에 동의하지 않았습니다 - 추후 에러 처리");
    }

    console.log("기술적인 문제 발생");
  };

  /**
   * @summary Watcher 가 동작한 후 정상적으로 위치를 가져왔을대 실행되는 함수입니다.
   *
   * ( throttle을 이용해 setter를 갱신시키기 위해선 useRef를 사용해야합니다. )
   */
  const updateUserLocation = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      setUserLocation({ lat: latitude, lng: longitude });
    }, 200),
  ).current;

  const handleClickFallback = () => {
    if (pageStep === "LOG_RECORD_STANDBY") {
      router.back();
      return;
    }

    setModalView("CONFIRM");
    openModal({
      onClickAccept: () => {
        setPageStep("LOG_RECORD_STANDBY");
        setLogData(DEFAULT_LOG_DATA);
        closeModal();
      },
      message: "모든 기록이 사라집니다. 진짜로 뒤로 가쉴...?",
      warningMessage: "현재의 기록은 저장되지 않고 사라집니다.",
    });
  };

  /**
   * @summary 전달받은 경로(polyline) 데이터 내부의 getLength 함수를 통해
   *
   * 경로 거리를 M단위로 전달받고 LogData에 업로드 합니다.
   */
  const handleDistanceCalculation = useCallback((polyLine: kakao.maps.Polyline) => {
    const newDistance = Math.floor(polyLine.getLength());

    setLogData((prevData) => ({
      ...prevData,
      distance: newDistance,
    }));
  }, []);

  return (
    <LogRecordView
      pageStep={pageStep}
      logData={logData}
      watchCode={watchCode}
      userLocation={userLocation}
      setPageStep={setPageStep}
      setWatchCode={setWatchCode}
      setLogData={setLogData}
      onErrorWatcher={handleWatchError}
      updateUserLocation={updateUserLocation}
      handleClickFallback={handleClickFallback}
      onCreatePathLine={handleDistanceCalculation}
    />
  );
};

export default LogRecordController;
