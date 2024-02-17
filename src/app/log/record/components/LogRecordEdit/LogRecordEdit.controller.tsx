/**
 * @TODO
 * 1. View 인터페이스 작업
 * 2. 모달 인터페이스 작업
 * 3. Props 작업
 * 4. 로직 작업
 * 5. 데이터, 로직 바인딩
 * 6. 예외처리 및 에러 핸들링
 * 7. 모션 애니메이션 적용
 */

import { useEffect } from "react";
import LogRecordEditView from "./LogRecordEdit.view";
import { useUI } from "@/components/uiContext/UiContext";
import { SetLogData } from "../../LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordEditControllerProps {
  logData: MasilRecordRequest;
  currentPinIndex: number;

  setLogData: SetLogData;
  setCurrentPinIndex: (pinIndex: number) => void;
}

const LogRecordEditController = ({
  logData,
  currentPinIndex,

  setLogData,
  setCurrentPinIndex,
}: LogRecordEditControllerProps) => {
  const { openModal, setModalView, closeModal } = useUI();

  useEffect(() => {
    // clean up
    return () => {
      console.log("Edit Component CleanUp");
      // TODO: 그려진 경로 좌표들을 기반으로, 맵의 중간점을 갱신
    };
  }, []);

  /**
   * @func
   * @params ()
   * @brief
   */

  /**
   * @func handleClickPin
   * @params (pinIndex: number)
   * @brief 특정 인덱스의 핀 정보를 담고 있는 Modal을 불러옵니다.
   */

  const handleClickPin = (pinIndex: number) => {
    setModalView("PIN_EDIT");
    openModal({
      onClickAccept: () => {
        // TODO: 작성한 핀 메모를 logData에 저장
      },
    });
  };

  /**
   * @func setPinData
   * @params (pinIndex: number, pinMemo: string)
   * @brief 입력받은 인덱스를 기반으로 logData의 핀 정보를 갱신합니다.
   */
  const setPinData = (PinIndex: number, pinMemo: string) => {};

  /**
   * @func removePinData
   * @params (pinIndex: number)
   * @brief 특정 인덱스의 핀을 제거합니다.
   */
  const removePinData = (pinIndex: number) => {};

  /**
   * @func handleImageUpload
   * @params (image: File, pinIndex: number)
   * @brief 사용자가 핀 썸네일을 첨부하면 실행됩니다. API와 통신하여 이미지 파일을 서버에 저장, URL로 변환하여 반환받습니다. 성공적으로 반환받은 경우 썸네일 URL을 logData의 핀 인덱스에 저장합니다.
   */
  const handleImageUpload = (pinIndex: number, image: File) => {};

  /**
   * @func handleSubmit
   * @params (memo: string)
   * @brief 폼을 통해 입력받은 Memo를 logData의 content에 저장한 후, 서버에 전송합니다.
   */
  const handleSubmit = (memo: string) => {};

  return (
    <LogRecordEditView
      logData={logData}
      currentPinIndex={currentPinIndex}
      onClickPin={handleClickPin}
      setPinData={setPinData}
      removePinData={removePinData}
      onImageUpload={handleImageUpload}
      onSubmit={handleSubmit}
      setCurrentPinIndex={setCurrentPinIndex}
    />
  );
};

export default LogRecordEditController;
