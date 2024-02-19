import { Button } from "@/components";
import * as S from "./LogRecordRecording.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { Pin } from "@/components/icons";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordRecordingViewProps {
  logData: MasilRecordRequest;
  handleClickCreatePin: () => void;
  handleClickCompleteRecord: () => void;
}

const LogRecordRecordingView = ({
  handleClickCreatePin,
  handleClickCompleteRecord,
  logData,
}: LogRecordRecordingViewProps) => {
  const calcHour = Math.floor(logData.totalTime / 3600);
  const calcMin = Math.floor((logData.totalTime % 3600) / 60);
  const calcSec = logData.totalTime % 60;

  const hour = calcHour > 9 ? calcHour : `0${calcHour}`;
  const min = calcMin > 9 ? calcMin : `0${calcMin}`;
  const sec = calcSec > 9 ? calcSec : `0${calcSec}`;

  return (
    <S.LogRecordActionLayout>
      <Button
        style={{ marginBottom: "1.6rem" }}
        variant="neumorp"
        onClickHandler={handleClickCreatePin}
      >
        <Pin />
      </Button>

      <S.LogRecordActionContainer>
        <S.LogRecordInfoContainer>
          <S.LogRecordInfo>{`${hour} : ${min} : ${sec}`}</S.LogRecordInfo>
          <S.LogRecordInfo>{`${logData.distance} M`}</S.LogRecordInfo>
        </S.LogRecordInfoContainer>

        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{ fontWeight: FONT_WEIGHT.BOLD, opacity: 0.9, fontSize: FONT_SIZE.LARGE }}
          width={"100%"}
          onClickHandler={handleClickCompleteRecord}
        >
          마실 기록 완료
        </Button>
      </S.LogRecordActionContainer>
    </S.LogRecordActionLayout>
  );
};

export default LogRecordRecordingView;
