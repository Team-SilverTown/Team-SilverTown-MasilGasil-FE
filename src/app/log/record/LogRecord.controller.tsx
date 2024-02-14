"use client";

import { KakaoFormatPosition } from "@/types/OriginDataType";
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

  /**
   * @param lat 위도
   * @param lng 경도
   *
   * @summary kakao Map Api 에서 반환해주는 위도 경도 데이터를 GeoJSON 형식으로 변환해줍니다.
   */
  const handleChangeCenter = ({ lat, lng }: KakaoFormatPosition) => {
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
