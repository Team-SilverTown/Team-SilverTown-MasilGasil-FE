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
import { DEFAULT_LOG_DATA, LOG_RECORD_REDUCER_ACTIONS } from "../LogRecord.constants";
import logRecordReducer from "./reducer/LogRecordReducer";
import useUserLocationStore from "@/stores/useUserLocationStore";

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
});

export const LogRecordContextProvider = ({ children }: LogRecordContextProviderProps) => {
  const [test, dispatch] = useReducer(logRecordReducer, DEFAULT_LOG_DATA);

  const [logData, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [isActiveExitAnimation, setIsActiveExitAnimation] = useState(false);
  const { userLocation } = useUserLocationStore();

  /**
   * @summary 전달받은 경로(polyline) 데이터 내부의 getLength 함수를 통해
   *
   * 경로 거리를 M단위로 전달받고 LogData에 업로드 합니다.
   */
  const updateDistance = (polyLine: kakao.maps.Polyline) => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.CALCULATE_DISTANCE, payload: { polyLine } });
  };

  /**
   * @summary 현재 위치에 핀을 추가하는 함수
   
   * 특정 거리 이내에 핀이 존재할경우 찍히지 앟음.
   */
  const createPin = () => {
    dispatch({ type: LOG_RECORD_REDUCER_ACTIONS.CREATE_PIN, payload: { location: userLocation } });
  };

  useEffect(() => {
    console.log("create PIN!!!!", test);
  }, [test]);

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
