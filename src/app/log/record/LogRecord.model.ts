import { useState } from "react";
import { LogPageStep } from "./LogRecord.types";
import { LogType, Position } from "@/types/Request/Masils";
import useUserLocationStore from "@/stores/useUserLocationStore";

const DEFAULT_LOG_DATA: LogType = {
  location1: "",
  location2: "",
  location3: "",
  path: [],
  title: "",
  content: "",
  distance: 0,
  totalTime: 0,
  startedAt: "",
  pinPoints: [],
  thumbnail: null,
  postId: "",
};

const useLogRecordModel = () => {
  const { userLocation } = useUserLocationStore();

  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [logData, setLogData] = useState<LogType>(DEFAULT_LOG_DATA);

  // 이후 Store 에서 가져와야함
  const [center, setCentner] = useState<Position>(userLocation);
  const [watchCode, setWatchCode] = useState(0);

  return {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    center,
    setCentner,
    watchCode,
    setWatchCode,
  };
};

export default useLogRecordModel;
