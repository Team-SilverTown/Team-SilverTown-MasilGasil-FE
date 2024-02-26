import { useEffect } from "react";
import LogRecordEditView from "./LogRecordEdit.view";
import { SetLogData } from "../../LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { OnClickPin } from "@/components/MasilMap/MasilMap.types";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useUI } from "@/components/uiContext/UiContext";

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
  const { setModalView, openModal, closeModal } = useUI();
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
    // const pathThumbnailUrl = drawPath(logData.path);

    // 경로를 기반으로 그려진 썸네일과 메모를 logData 데이터에 저장
    // setLogData((prevData) => {
    //   return { ...prevData, thumbnailUrl: pathThumbnailUrl, content: memo };
    // });

    // TODO: logData API 통신

    // API 통신 완료 시
    setModalView("LOG_RECORD_DONE_VIEW");
    openModal({
      onClickUploadPost: () => {
        // 산책로 공유하기를 클릭한 경우
        // 산책로 공유하기 페이지로 이동, logData를 전달
        closeModal();
      },
      onClickCancle: () => {
        // 산책로 공유하기를 클릭하지 않은 경우
        // 메인 페이지 혹은 내 기록 페이지로 이동
        closeModal();
      },
      logData,
    });

    // setLogData(DEFAULT_LOG_DATA);

    // navigator.geolocation.getCurrentPosition(({ coords }) => {
    //   setUserLocation({ lat: coords.latitude, lng: coords.longitude });
    // });
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
