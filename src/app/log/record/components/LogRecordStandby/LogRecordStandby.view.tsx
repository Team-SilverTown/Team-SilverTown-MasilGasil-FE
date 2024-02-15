import Theme, { BUTTON_FULL_WIDTH, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./LogRecordStandby.Styles";
import { Button } from "@/components";

interface LogRecordStandbyViewProps {
  onClick: () => void;
}

const LogRecordStandbyView = ({ onClick }: LogRecordStandbyViewProps) => {
  return (
    <S.LogRecordStandbyLayout>
      <Button
        buttonColor={Theme.lightTheme.green_500}
        textColor={Theme.lightTheme.white}
        style={{ fontWeight: FONT_WEIGHT.BOLD }}
        width={BUTTON_FULL_WIDTH}
        onClickHandler={onClick}
      >
        마실 기록 시작
      </Button>
    </S.LogRecordStandbyLayout>
  );
};

export default LogRecordStandbyView;
