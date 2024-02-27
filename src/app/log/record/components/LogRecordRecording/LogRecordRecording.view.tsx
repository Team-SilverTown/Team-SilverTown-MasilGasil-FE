import { Button } from "@/components";
import * as S from "./LogRecordRecording.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordRecordingViewProps {
  logData: MasilRecordRequest;
  handleClickCompleteRecord: () => void;
}

const LogRecordRecordingView = ({
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
      <S.LogRecordActionContainer>
        <S.LogRecordInfoContainer>
          <S.LogRecordInfo>
            {hour !== "00" && (
              <>
                {hour}
                <S.LogRecordInfoUnit>시</S.LogRecordInfoUnit>
              </>
            )}

            {min !== "00" && (
              <>
                {min}
                <S.LogRecordInfoUnit>분</S.LogRecordInfoUnit>
              </>
            )}

            {sec}
            <S.LogRecordInfoUnit>초</S.LogRecordInfoUnit>
          </S.LogRecordInfo>

          <S.LogRecordInfo>
            {logData.distance}
            <S.LogRecordInfoUnit>m</S.LogRecordInfoUnit>
          </S.LogRecordInfo>
        </S.LogRecordInfoContainer>

        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{ fontWeight: FONT_WEIGHT.BOLD, fontSize: FONT_SIZE.H5, height: "6rem" }}
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
