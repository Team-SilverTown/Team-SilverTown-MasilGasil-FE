"use client";

import useUserLocationStore from "@/stores/useUserLocationStore";
import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";
import { throttle } from "lodash";
import { useCallback, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOG_DATA, LOG_RECORD_MESSAGE } from "./LogRecord.constants";
import { useUI } from "@/components/uiContext/UiContext";
import useMapCenterStore from "@/components/MasilMap/store/useMapCenterStore";
import getTwoPointDistance from "./utils/getTwoPointDistance";
import useLogRecordContext from "./context/LogRecordContext";

const MIN_INSERT_PIN_RANGE = 10; // M 단위

const LogRecordController = () => {
  const { openModal, setModalView, closeModal } = useUI();
  const { userLocation, setUserLocation } = useUserLocationStore();
  const { isMapResizing, setIsMapResizing } = useLogRecordModel();
  const { setIsOutCenter } = useMapCenterStore();
  const router = useRouter();

  const {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    isActiveExitAnimation,
    setIsActiveExitAnimation,
    currentPinIndex,
    setCurrentPinIndex,

    createPin,
    clickPin,
    updateDistance,
  } = useLogRecordContext();

  // Stay
  useEffect(() => {
    closeModal();
  }, [pageStep]);

  // Util - Context
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
        message: LOG_RECORD_MESSAGE.ERROR.WATCH_PERMISSION_DENIED,
      });
    }
    /*
    TODO
    추후 멘트 수정 
    */
    openModal({
      message: LOG_RECORD_MESSAGE.ERROR.WATCH_ERROR,
    });
  };

  // Util - GeoLocationUtils // Context
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

  // Stay or Context
  const handleClickFallback = () => {
    setCurrentPinIndex(-1);

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
      message: LOG_RECORD_MESSAGE.FALL_BACK.MESSAGE,
      warningMessage: LOG_RECORD_MESSAGE.FALL_BACK.WARNING_MESSAGE,
    });
  };

  // const handleDistanceCalculation = useCallback((polyLine: kakao.maps.Polyline) => {
  //   const newDistance = Math.floor(polyLine.getLength());

  //   setLogData((prevData) => ({
  //     ...prevData,
  //     distance: newDistance,
  //   }));
  // }, []);

  // const handleClickPin = (pinIndex: number) => {
  //   setCurrentPinIndex(pinIndex);

  //   setModalView("PIN_EDIT_VIEW");
  //   openModal({
  //     onClickAccept: (imageUrl: string | null, pinContent: string | null) => {
  //       /**
  //        * @brief 핀 모달을 통해 입력받은 썸네일 이미지 혹은 메모를 logData에 저장합니다. 이후 모달을 닫고 currentPinIndex를 초기화합니다.
  //        */

  //       if (imageUrl) {
  //         setLogData((prevData) => {
  //           const newPins = [...prevData.pins];
  //           newPins[pinIndex].thumbnailUrl = imageUrl;

  //           return { ...prevData, pins: newPins };
  //         });
  //       }

  //       if (pinContent) {
  //         setLogData((prevData) => {
  //           const newPins = [...prevData.pins];
  //           newPins[pinIndex].content = pinContent;

  //           return { ...prevData, pins: newPins };
  //         });
  //       }

  //       closeModal();
  //       setCurrentPinIndex(-1);
  //     },
  //     onClickRemove: (pinIndex: number) => {
  //       handleRemovePin(pinIndex);
  //       closeModal();
  //     },
  //     pinIndex,
  //     pin: logData.pins[pinIndex],
  //   });
  // };

  // Context - reducer
  /**
   * @func handleRemovePin
   * @params (pinIndex: number)
   * @brief 특정 인덱스의 핀을 제거합니다.
   */
  // const handleRemovePin = (pinIndex: number) => {
  //   setLogData((prevData) => {
  //     return { ...prevData, pins: prevData.pins.filter((_, index) => index !== pinIndex) };
  //   });
  //   setCurrentPinIndex(-1);
  // };

  // Stay
  const handleOffIsOutCenter = () => {
    setIsOutCenter(false);
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
      currentPinIndex={currentPinIndex}
      setCurrentPinIndex={setCurrentPinIndex}
      handleOffIsOutCenter={handleOffIsOutCenter}
      isActiveExitAni={isActiveExitAnimation}
      setIsActiveExitAni={setIsActiveExitAnimation}
      isMapResizing={isMapResizing}
      setIsMapResizing={setIsMapResizing}
      onClickPin={clickPin}
      handleClickCreatePin={createPin}
      onCreatePathLine={updateDistance}
    />
  );
};

export default LogRecordController;
