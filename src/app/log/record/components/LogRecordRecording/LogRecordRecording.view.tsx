import { Button } from "@/components";
import * as S from "./LogRecordRecording.styles";
import Theme, { BUTTON_FULL_WIDTH, FONT_WEIGHT } from "@/styles/theme";
import { Pin } from "@/components/icons";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordRecordingViewProps {
  logData: MasilRecordRequest;
  handleClickCreatePin: () => void;
}

const LogRecordRecordingView = ({ handleClickCreatePin, logData }: LogRecordRecordingViewProps) => {
  return (
    <S.LogRecordActionLayout>
      <Button
        style={{ marginBottom: "1rem" }}
        variant="neumorp"
        onClickHandler={handleClickCreatePin}
      >
        <Pin />
      </Button>

      <S.LogRecordActionContainer>
        <S.LogRecordInfoContainer>
          <S.LogRecordInfo>{"00 : 00 : 00"}</S.LogRecordInfo>
          <S.LogRecordInfo>{`${logData.distance} M`}</S.LogRecordInfo>
        </S.LogRecordInfoContainer>

        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{ fontWeight: FONT_WEIGHT.BOLD, opacity: 0.9, fontSize: "1.6rem" }}
          width={BUTTON_FULL_WIDTH}
        >
          마실 기록 완료
        </Button>
      </S.LogRecordActionContainer>
    </S.LogRecordActionLayout>
  );
};

export default LogRecordRecordingView;
