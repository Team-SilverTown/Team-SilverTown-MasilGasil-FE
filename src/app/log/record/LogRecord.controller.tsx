"use client";

import useUserLocationStore from "@/stores/useUserLocationStore";
import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";
import { throttle } from "lodash";
import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";
import { useUI } from "@/components/uiContext/UiContext";

const LogRecordController = () => {
  const { openModal, setModalView, closeModal } = useUI();
  const { userLocation, setUserLocation } = useUserLocationStore();
  const {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    watchCode,
    setWatchCode,
    currentPinIndex,
    setCurrentPinIndex,
  } = useLogRecordModel();
  
  const router = useRouter();

  // TODO: 강남역에서 내 위치로 갱신될 때까지 loading spinner 및 pin 찍을 수 없게

  /**
   * @summary watcher가 오류가 발생했을때 수행할 동작을 위한 함수입니다.
   * @param PERMISSION_DENIED 사용자가 위치 서비스를 동의 하지 않았는지를 파악할때 code와 비교하는 용도로 사용되어집니다.
   */
  const handleWatchError = ({ code, PERMISSION_DENIED }: GeolocationPositionError) => {
    setModalView("LOG_RECORD_ALERT_VIEW");

    if (code === PERMISSION_DENIED) {
      /*
      TODO
      추후 멘트 수정 
      */
      openModal({
        message: "현재 위치 서비스에 동의하지 않았습니다. 동의 후 이용 가능합니다.",
      });
    }
    /*
    TODO
    추후 멘트 수정 
    */
    openModal({
      message: "서비스에 문제가 발생했습니다. 잠시 후 이용해주세요.",
    });
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

    setModalView("LOG_RECORD_CONFIRM_VIEW");
    openModal({
      onClickAccept: () => {
        setPageStep("LOG_RECORD_STANDBY");

        // TODO: 맵 Center 렌더링 필요
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

  const handleClickPin = (pinIndex: number) => {
    setCurrentPinIndex(pinIndex);
    setModalView("PIN_EDIT");
    openModal({
      onClickAccept: (imageUrl: string | null, pinContent: string | null) => {
        /**
         * @brief 핀 모달을 통해 입력받은 썸네일 이미지 혹은 메모를 logData에 저장합니다. 이후 모달을 닫고 currentPinIndex를 초기화합니다.
         */

        if (imageUrl) {
          setLogData((prevData) => {
            const newPins = [...prevData.pins];
            newPins[pinIndex].thumbnailUrl = imageUrl;

            return { ...prevData, pins: newPins };
          });
        }

        if (pinContent) {
          setLogData((prevData) => {
            const newPins = [...prevData.pins];
            newPins[pinIndex].content = pinContent;

            return { ...prevData, pins: newPins };
          });
        }

        closeModal();
        setCurrentPinIndex(-1);
      },
      onClickRemove: (pinIndex: number) => {
        handleRemovePin(pinIndex);
        closeModal();
      },
      pinIndex,
    });
  };

  /**
   * @func handleRemovePin
   * @params (pinIndex: number)
   * @brief 특정 인덱스의 핀을 제거합니다.
   */
  const handleRemovePin = (pinIndex: number) => {
    setLogData((prevData) => {
      return { ...prevData, pins: prevData.pins.filter((_, index) => index !== pinIndex) };
    });
    setCurrentPinIndex(-1);
  };

  return (
    <LogRecordView
      pageStep={pageStep}
      logData={logData}
      userLocation={userLocation}
      setPageStep={setPageStep}
      setLogData={setLogData}
      onErrorWatcher={handleWatchError}
      updateUserLocation={updateUserLocation}
      handleClickFallback={handleClickFallback}
      onClickPin={handleClickPin}
      onCreatePathLine={handleDistanceCalculation}
      currentPinIndex={currentPinIndex}
      setCurrentPinIndex={setCurrentPinIndex}
    />
  );
};

export default LogRecordController;
