import { Button } from "@/components";
import * as S from "./LogRecordRecording.styles";
import Theme, { BUTTON_FULL_WIDTH, FONT_WEIGHT } from "@/styles/theme";
import { MapPin } from "@/components/icons";

const LogRecordRecordingView = () => {
  return (
    <S.LogRecordActionLayout>
      <Button
        style={{ marginBottom: "1rem" }}
        variant="neumorp"
      >
        <MapPin fill={Theme.lightTheme.yellow_500} />
      </Button>

      <S.LogRecordActionContainer>
        <S.LogRecordInfoContainer>
          <S.LogRecordInfo></S.LogRecordInfo>
          <S.LogRecordInfo></S.LogRecordInfo>
        </S.LogRecordInfoContainer>

        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{ fontWeight: FONT_WEIGHT.BOLD, opacity: 0.8 }}
          width={BUTTON_FULL_WIDTH}
        >
          마실 기록 시작
        </Button>
      </S.LogRecordActionContainer>
    </S.LogRecordActionLayout>
  );
};

export default LogRecordRecordingView;
