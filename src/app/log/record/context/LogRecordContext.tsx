import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { LogPageStep } from "../LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import {
  DEFAULT_LOG_DATA,
  LOG_RECORD_MESSAGE,
  LOG_RECORD_REDUCER_ACTIONS,
} from "../LogRecord.constants";
import logRecordReducer from "./reducer/LogRecordReducer";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useUI } from "@/components/uiContext/UiContext";

interface LogRecordContextValues {
  pageStep: LogPageStep;
  setPageStep: Dispatch<SetStateAction<LogPageStep>>;
  logData: MasilRecordRequest;
  setLogData: Dispatch<SetStateAction<MasilRecordRequest>>;
  currentPinIndex: number;
  setCurrentPinIndex: Dispatch<SetStateAction<number>>;
  isActiveExitAnimation: boolean;
  setIsActiveExitAnimation: Dispatch<SetStateAction<boolean>>;

  updateDistance: (polyLine: kakao.maps.Polyline) => void;
  createPin: () => void;
  clickPin: (pinIndex: number) => void;
  startRecord: (location: GeolocationPosition) => void;
}

interface LogRecordContextProviderProps {
  children: React.ReactNode;
}

const LogRecordContext = createContext<LogRecordContextValues>({
  pageStep: "LOG_RECORD_STANDBY",
  setPageStep: () => {},
  logData: DEFAULT_LOG_DATA,
  setLogData: () => {},
  currentPinIndex: -1,
  setCurrentPinIndex: () => {},
  isActiveExitAnimation: false,
  setIsActiveExitAnimation: () => {},

  updateDistance: () => {},
  createPin: () => {},
  clickPin: () => {},
  startRecord: () => {},
});

export const LogRecordContextProvider = ({ children }: LogRecordContextProviderProps) => {
  const [logData, dispatch] = useReducer(logRecordReducer, DEFAULT_LOG_DATA);
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [isActiveExitAnimation, setIsActiveExitAnimation] = useState(false);

  const [dummy, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  const { userLocation, setUserLocation } = useUserLocationStore();
  const { openModal, setModalView, closeModal, closeLoadingSpinner } = useUI();

  const updateDistance = (polyLine: kakao.maps.Polyline) => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.CALCULATE_DISTANCE, payload: { polyLine } });
  };

  const createPin = () => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.CREATE_PIN, payload: { location: userLocation } });
  };

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
        dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.REMOVE_PIN, payload: { pinIndex } });
        setCurrentPinIndex(-1);
        closeModal();
      },
      pinIndex,
      pin: logData.pins[pinIndex],
    });
  };

  /**
   * @summary 사용자의 현 위치 좌표를 기반으로 주소를 반환합니다.
   *
   * - 만약 주소를 찾을 수 없거나 정상적인 주소를 반환받지 못한다면 홈으로 유도합니다.
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

  useEffect(() => {
    console.log(logData);
  }, [logData.depth1]);
  return (
    <LogRecordContext.Provider
      value={{
        logData,
        setLogData,
        pageStep,
        setPageStep,
        currentPinIndex,
        setCurrentPinIndex,
        isActiveExitAnimation,
        setIsActiveExitAnimation,

        updateDistance,
        createPin,
        clickPin,
        startRecord,
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
