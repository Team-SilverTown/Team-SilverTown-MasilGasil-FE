import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";
import { LogPageStep, SetCurrentPinIndex, SetIsActiveExitAnimation } from "../LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import {
  DEFAULT_LOG_DATA,
  LOG_RECORD_MESSAGE,
  LOG_RECORD_REDUCER_ACTIONS,
} from "../LogRecord.constants";
import logRecordReducer from "./reducer/LogRecordReducer";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useUI } from "@/components/uiContext/UiContext";
import { throttle } from "lodash";

interface LogRecordContextValues {
  logData: MasilRecordRequest;
  pageStep: LogPageStep;
  setPageStep: Dispatch<SetStateAction<LogPageStep>>;

  currentPinIndex: number;
  setCurrentPinIndex: SetCurrentPinIndex;

  isActiveExitAnimation: boolean;
  setIsActiveExitAnimation: SetIsActiveExitAnimation;

  initData: () => void;

  createPin: () => void;
  removePin: (pinIndex: number) => void;
  clickPin: (pinIndex: number) => void;

  startRecord: (position: GeolocationPosition) => void;
  increaseTimer: () => void;
  updatePath: (position: GeolocationPosition) => void;
  updateDistance: (polyLine: kakao.maps.Polyline) => void;
}

interface LogRecordContextProviderProps {
  children: React.ReactNode;
}

const LogRecordContext = createContext<LogRecordContextValues>({
  logData: DEFAULT_LOG_DATA,
  pageStep: "LOG_RECORD_STANDBY",
  setPageStep: () => {},

  currentPinIndex: -1,
  setCurrentPinIndex: () => {},

  isActiveExitAnimation: false,
  setIsActiveExitAnimation: () => {},

  initData: () => {},

  createPin: () => {},
  removePin: () => {},
  clickPin: () => {},

  startRecord: () => {},
  increaseTimer: () => {},
  updatePath: () => {},
  updateDistance: () => {},
});

export const LogRecordContextProvider = ({ children }: LogRecordContextProviderProps) => {
  const [logData, dispatch] = useReducer(logRecordReducer, DEFAULT_LOG_DATA);
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [isActiveExitAnimation, setIsActiveExitAnimation] = useState(false);

  const { userLocation, setUserLocation } = useUserLocationStore();
  const { openModal, setModalView, closeModal, closeLoadingSpinner } = useUI();

  /**
   * @func updateDistance
   * @params (polyLine: kakao.maps.Polyline)
   * @brief 현재 경로의 거리를 갱신하기위한 dispatch를 실행합니다.
   */
  const updateDistance = (polyLine: kakao.maps.Polyline) => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.CALCULATE_DISTANCE, payload: { polyLine } });
  };

  /**
   * @func createPin
   * @brief 현재 center 위치를 이용해 핀을 생성하기 위한 dispatch를 실행합니다.
   */
  const createPin = () => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.CREATE_PIN, payload: { location: userLocation } });
  };

  /**
   * @func removePin
   * @params (pinIndex: number)
   * @brief 특정 인덱스의 핀을 제거합니다.
   */
  const removePin = (pinIndex: number) => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.REMOVE_PIN, payload: { pinIndex } });
    setCurrentPinIndex(-1);
  };

  /**
   * @func clickPin
   * @params (pinIndex: number)
   * @brief Pin을 클릭했을때 해당 pin을 수정 , 삭제 하기위한 Modal을 제공합니다.
   *
   * 각 모달 내부에 함수로 dispatch를 전달합니다.
   */
  const clickPin = (pinIndex: number) => {
    setCurrentPinIndex(pinIndex);
    setModalView("PIN_EDIT_VIEW");

    openModal({
      onClickAccept: (imageUrl: string | null, pinContent: string | null) => {
        dispatch({
          type: LOG_RECORD_REDUCER_ACTIONS.UPDATE_PIN,
          payload: {
            pinIndex,
            imageUrl,
            pinContent,
          },
        });
        setCurrentPinIndex(-1);
        closeModal();
      },
      onClickRemove: (pinIndex: number) => {
        removePin(pinIndex);
        closeModal();
      },
      pinIndex,
      pin: logData.pins[pinIndex],
    });
  };

  /**
   * @func startRecord
   * @params (position : GeolocationPosition)
   * @brief 사용자의 현 위치 좌표를 기반으로 주소를 반환합니다.
   *
   * 만약 주소를 찾을 수 없거나 정상적인 주소를 반환받지 못한다면 홈으로 유도합니다.
   */
  const startRecord = ({ coords }: GeolocationPosition) => {
    const { latitude, longitude } = coords;

    const goe = new kakao.maps.services.Geocoder();
    goe.coord2RegionCode(longitude, latitude, (result, status) => {
      if (status !== kakao.maps.services.Status.OK) {
        setModalView("LOG_RECORD_ALERT_VIEW");
        openModal({
          message: LOG_RECORD_MESSAGE.REGION_ERROR.MESSAGE,
        });
        setPageStep("LOG_RECORD_STANDBY");
        return;
      }

      result[0];
      dispatch({
        type: LOG_RECORD_REDUCER_ACTIONS.UPDATE_ADDRESS,
        payload: {
          location: { lat: latitude, lng: longitude },
          region: result[0],
        },
      });
    });

    setUserLocation({ lat: latitude, lng: longitude });
    closeLoadingSpinner();
    setIsActiveExitAnimation(true);
    setPageStep("LOG_RECORD_RECORDING");
  };

  /**
   * @func increaseTimer
   * @brief 1초마다 증가하는 타이머
   */
  const increaseTimer = () => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.INCREASE_TIMER });
  };

  /**
   * @func updatePath
   * @params (position : GeolocationPosition)
   * @brief watch의 success 콜백에 들어가는 함수로 경로 값을 추가시켜줍니다.
   *
   * 단, throttle을 통해 5초에 한번 실행.
   *
   *  실행된 후 이전 경로보다 일정거리 이하 혹은 이상인 경우 종료.
   */
  const updatePath = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      const newPoint = { lat: latitude, lng: longitude };

      dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.UPDATE_PATH, payload: { location: newPoint } });
    }, 5000),
  ).current;

  /**
   * @func initData
   * @brief 산책 정보 데이터를 초기화합니다.
   */
  const initData = () => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.INIT });
  };

  return (
    <LogRecordContext.Provider
      value={{
        logData,
        pageStep,
        setPageStep,
        currentPinIndex,
        setCurrentPinIndex,
        isActiveExitAnimation,
        setIsActiveExitAnimation,

        initData,

        createPin,
        removePin,
        clickPin,

        startRecord,
        increaseTimer,
        updatePath,
        updateDistance,
      }}
    >
      {children}
    </LogRecordContext.Provider>
  );
};

const useLogRecordContext = () => {
  const contextValue = useContext(LogRecordContext);
  return contextValue;
};

export default useLogRecordContext;
