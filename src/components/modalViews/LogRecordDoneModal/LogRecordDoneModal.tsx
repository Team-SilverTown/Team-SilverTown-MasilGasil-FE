import { ModalLayout } from "@/components/Modal";
import { MasilRecordRequest } from "@/types/Request";
import * as S from "./LogRecordDoneModal.styles";
import { Button } from "@/components";
import Theme, { FONT_WEIGHT, FONT_SIZE } from "@/styles/theme";
import TimeChecker from "@/components/icons/TimeChecker";
import FootPrint from "@/components/icons/FootPrint";

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

  return (
    <ModalLayout>
      <S.RecordDoneLayout>
        <S.RecordDoneContainer>
          <S.Header>기록을 완료했어요!</S.Header>
          <S.Text>방금 다녀온 산책을 유저들과 공유해보세요</S.Text>
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
