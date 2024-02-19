import { useState } from "react";
import { LogPageStep } from "./LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";
import { GeoPosition } from "@/types/OriginDataType";

const useLogRecordModel = () => {
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [logData, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState<GeoPosition>({ lat: 0, lng: 0 });

  return {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    currentPinIndex,
    setCurrentPinIndex,
    isDragging,
    setIsDragging,
    dragPosition,
    setDragPosition,
  };
};

export default useLogRecordModel;
