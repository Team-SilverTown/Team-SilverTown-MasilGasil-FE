import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { LogPageStep } from "../LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA, LOG_RECORD_REDUCER_ACTIONS } from "../LogRecord.constants";
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
});

export const LogRecordContextProvider = ({ children }: LogRecordContextProviderProps) => {
  const [test, dispatch] = useReducer(logRecordReducer, DEFAULT_LOG_DATA);

  const [logData, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [isActiveExitAnimation, setIsActiveExitAnimation] = useState(false);
  const { userLocation } = useUserLocationStore();
  const { openModal, setModalView, closeModal } = useUI();

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
      pin: test.pins[pinIndex],
    });
  };

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
