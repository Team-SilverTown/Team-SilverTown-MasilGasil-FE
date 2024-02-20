import { useEffect } from "react";
import LogRecordEditView from "./LogRecordEdit.view";
import { SetLogData } from "../../LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { OnClickPin } from "@/components/MasilMap/MasilMap.types";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { drawPath } from "@/utils/drawPath";

interface LogRecordEditControllerProps {
  logData: MasilRecordRequest;
  currentPinIndex: number;

  setLogData: SetLogData;
  setCurrentPinIndex: (pinIndex: number) => void;
  onClickPin: OnClickPin;
}

const LogRecordEditController = ({
  logData,
  currentPinIndex,

  setLogData,
  setCurrentPinIndex,
  onClickPin,
}: LogRecordEditControllerProps) => {
  const { setUserLocation } = useUserLocationStore();

  useEffect(() => {
    const pathLength = logData.path.length;
    const latAvg = logData.path.reduce((total, point) => total + point.lat, 0) / pathLength;
    const lngAvg = logData.path.reduce((total, point) => total + point.lng, 0) / pathLength;

    // TODO: 배포 후 테스트 필요
    if (latAvg && lngAvg) {
      setUserLocation({ lat: latAvg, lng: lngAvg });
    }
  }, []);

  /**
   * @func removePinData
   * @params (pinIndex: number)
   * @brief 특정 인덱스의 핀을 제거합니다.
   */
  const removePinData = (pinIndex: number) => {
    setLogData((prevData) => {
      return { ...prevData, pins: prevData.pins.filter((_, index) => index !== pinIndex) };
    });
    setCurrentPinIndex(-1);
  };

  /**
   * @func handleImageUpload
   * @params (image: File, pinIndex: number)
   * @brief 사용자가 핀 썸네일을 첨부하면 실행됩니다. API와 통신하여 이미지 파일을 서버에 저장, URL로 변환하여 반환받습니다. 성공적으로 반환받은 경우 썸네일 URL을 logData의 핀 인덱스에 저장합니다.
   */
  const handleImageUpload = (pinIndex: number, image: File) => {
    // TODO: ImageFile 전송 후 URL 반환 (common 분리?)
    // PinEditModal에서 구현할수도 있음
  };

  /**
   * @func handleSubmit
   * @params (memo: string)
   * @brief 폼을 통해 입력받은 Memo를 logData의 content에 저장한 후, 서버에 전송합니다.
   */
  const handleSubmit = (memo: string) => {
    setLogData((prevData) => {
      return { ...prevData, content: memo };
    });

    // TODO: 패스가 그려진 지도를 캡쳐한 이미지를 기본 썸네일로 저장
    drawPath(logData.path);

    // TODO: logData 전송, 전송 중 로딩스피너 + 전송 완료 시 데이터 초기화

    // setLogData(DEFAULT_LOG_DATA);
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setUserLocation({ lat: coords.latitude, lng: coords.longitude });
    });
  };

  return (
    <LogRecordEditView
      logData={logData}
      currentPinIndex={currentPinIndex}
      onClickPin={onClickPin}
      removePinData={removePinData}
      onImageUpload={handleImageUpload}
      onSubmit={handleSubmit}
      setCurrentPinIndex={setCurrentPinIndex}
    />
  );
};

export default LogRecordEditController;
