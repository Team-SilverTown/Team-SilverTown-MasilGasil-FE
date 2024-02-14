"use client";

import { KakaoPosition } from "@/types/OriginDataType";
import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";

const LogRecordController = () => {
  const {
    pageStep,
    setPageStep,
    center,
    setCentner,
    logData,
    setLogData,
    watchCode,
    setWatchCode,
  } = useLogRecordModel();

  const handleChangeCenter = ({ lat, lng }: KakaoPosition) => {
    setCentner((prevCenter) => ({
      ...prevCenter,
      coordinates: [lat, lng],
    }));
  };

  return (
    <LogRecordView
      pageStep={pageStep}
      center={center}
      logData={logData}
      watchCode={watchCode}
      onChangeStep={setPageStep}
      onChangeCenter={handleChangeCenter}
      setWatchCode={setWatchCode}
    />
  );
};

export default LogRecordController;
