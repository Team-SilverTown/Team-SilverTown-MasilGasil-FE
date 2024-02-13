import { useState } from "react";
import { LogPageStep } from "./LogRecord.types";

import useUserLocationStore from "@/stores/useUserLocationStore";
import { MasilRecordRequest } from "@/types/Request/Masils";
import { GeoJSONPoint } from "@/types/OriginDataType/GeoJSON";

const DEFAULT_LOG_DATA: MasilRecordRequest = {
  address: {
    depth1: "",
    depth2: "",
    depth3: "",
  },
  path: { type: "LineString", coordinates: [] },
  title: "",
  content: "",
  distance: 0,
  totalTime: 0,
  startedAt: "",
  pins: [],
  thumbnailUrl: null,
  postId: null,
};

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
