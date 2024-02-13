import { useState } from "react";
import { LogCreateStep, LogType, Position } from "./LogCreate.types";

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

const useLogCreateModel = () => {
  const [createStep, setCreateStep] = useState<LogCreateStep>("LOG_CREATE_STEP_1");
  const [logData, setLogData] = useState<LogType>(DEFAULT_LOG_DATA);

  // 이후 Store 에서 가져와야함
  const [center, setCentner] = useState<Position>({ lat: 0, lng: 0 });
  const [watchCode, setWatchCode] = useState(0);

  return {
    createStep,
    setCreateStep,
    logData,
    setLogData,
    center,
    setCentner,
    watchCode,
    setWatchCode,
  };
};

export default useLogCreateModel;
