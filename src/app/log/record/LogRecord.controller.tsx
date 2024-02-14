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
    watchCode,
    setWatchCode,
    logData,
    setLogData,
  } = useLogRecordModel();

  const handleChangeCenter = ({ lat, lng }: KakaoPosition) => {
    setCentner((prevCenter) => ({
      ...prevCenter,
      coordinates: [lat, lng],
    }));
  };

  return (
    <LogRecordView
      center={center}
      pageStep={pageStep}
      watchCode={watchCode}
      onChangeStep={setPageStep}
      onChangeCenter={handleChangeCenter}
      setWatchCode={setWatchCode}
    />
  );
};

export default LogRecordController;
