import { ModalLayout } from "@/components/Modal";
import { MasilRecordRequest } from "@/types/Request";
import * as S from "./LogRecordDoneModal.styles";
import { Button } from "@/components";
import Theme, { FONT_WEIGHT, FONT_SIZE } from "@/styles/theme";
import TimeChecker from "@/components/icons/TimeChecker";
import FootPrint from "@/components/icons/FootPrint";
import { LOG_RECORD_MESSAGE } from "@/app/log/record/LogRecord.constants";
import Lottie from "react-lottie";
import animationData from "./animationData.json";

interface LogRecordDoneModalProps {
  logData: MasilRecordRequest;
  onClickUploadPost: () => void;
  onClickCancle: () => {};
}

interface ModalProps {
  props: LogRecordDoneModalProps;
}

// TODO: Close 버튼 제거 및 background를 클릭해도 모달이 닫히지 않게

const LogRecordDoneModal = ({ props }: ModalProps) => {
  const { onClickCancle, onClickUploadPost, logData } = props;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ModalLayout>
      <S.RecordDoneLayout>
        <Lottie
          options={defaultOptions}
          height={150}
          width={250}
        />
        <S.RecordDoneContainer>
          <S.HeaderTitle>{LOG_RECORD_MESSAGE.RECORD_DONE.MESSAGE}</S.HeaderTitle>
          <S.Text>{LOG_RECORD_MESSAGE.RECORD_DONE.PROPOSAL}</S.Text>
        </S.RecordDoneContainer>

        <S.RecordSummaryContainer>
          <S.RecordSummaryItem>
            <TimeChecker
              width={25}
              fill={Theme.lightTheme.gray_300}
            />
            <S.RecordSummaryCount>{Math.floor(logData.totalTime / 60)}</S.RecordSummaryCount>
            <S.RecordSummaryUnit>분</S.RecordSummaryUnit>
          </S.RecordSummaryItem>
          |
          <S.RecordSummaryItem>
            <FootPrint
              width={25}
              fill={Theme.lightTheme.gray_300}
            />
            <S.RecordSummaryCount>{logData.distance}</S.RecordSummaryCount>
            <S.RecordSummaryUnit>M</S.RecordSummaryUnit>
          </S.RecordSummaryItem>
        </S.RecordSummaryContainer>
      </S.RecordDoneLayout>

      <S.ButtonContainer>
        <Button
          buttonColor={Theme.lightTheme.gray_300}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            fontSize: FONT_SIZE.LARGE,
          }}
          onClickHandler={() => {}}
        >
          메인으로
        </Button>
        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            fontSize: FONT_SIZE.LARGE,
          }}
          onClickHandler={() => {}}
        >
          산책 공유하기
        </Button>
      </S.ButtonContainer>
    </ModalLayout>
  );
};

export default LogRecordDoneModal;
