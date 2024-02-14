import { useState } from "react";

import useUserLocationStore from "@/stores/useUserLocationStore";
import { LogPageStep } from "./LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { GeoJSONPoint } from "@/types/OriginDataType";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";

const useLogRecordModel = () => {
  const { userLocation } = useUserLocationStore();
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [logData, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  const [center, setCentner] = useState<GeoJSONPoint>(userLocation);
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
