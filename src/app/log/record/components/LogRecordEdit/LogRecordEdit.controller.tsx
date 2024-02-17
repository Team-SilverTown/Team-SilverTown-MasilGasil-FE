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

const LogRecordEditController = () => {
  const { openModal, setModalView, closeModal } = useUI();

  useEffect(() => {
    // clean up
    return () => {
      console.log("Edit Component CleanUp");
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

  const handleClickPin = (index: number) => {
    console.log(index);

    setModalView("PIN_EDIT");
    openModal({
      onClickAccept: () => {
        console.log(index);
      },
    });
  };

  /**
   * @func setPinData
   * @params (pinIndex: number, pinMemo: string)
   * @brief 입력받은 인덱스를 기반으로 logData의 핀 정보를 갱신합니다.
   */

  /**
   * @func removePinData
   * @params (pinIndex: number)
   * @brief 특정 인덱스의 핀을 제거합니다.
   */

  /**
   * @func handleSubmit
   * @params (memo: string)
   * @brief 폼을 통해 입력받은 Memo를 logData의 content에 저장한 후, 서버에 전송합니다.
   */

  /**
   * @func handleImageUpload
   * @params (image: file, pinIndex: number)
   * @brief 사용자가 핀 썸네일을 첨부하면 실행됩니다. API와 통신하여 이미지 파일을 서버에 저장, URL로 변환하여 반환받습니다. 성공적으로 반환받은 경우 썸네일 URL을 logData의 핀 인덱스에 저장합니다.
   */

  return <LogRecordEditView handleClickPin={handleClickPin} />;
};

export default LogRecordEditController;
