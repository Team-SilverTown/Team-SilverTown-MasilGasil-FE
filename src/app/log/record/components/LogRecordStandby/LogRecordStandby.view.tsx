import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./LogRecordStandby.styles";
import { Button } from "@/components";

interface LogRecordStandbyViewProps {
  onClick: () => void;
}

const LogRecordStandbyView = ({ onClick }: LogRecordStandbyViewProps) => {
  return (
    <S.LogRecordStandbyLayout>
      <Button
        buttonColor={Theme.lightTheme.green_500}
        variant="neumorp"
        textColor={Theme.lightTheme.white}
        style={{ fontWeight: FONT_WEIGHT.BOLD, fontSize: FONT_SIZE.LARGE }}
        width={"100%"}
        onClickHandler={onClick}
      >
        마실 기록 시작
      </Button>
    </S.LogRecordStandbyLayout>
  );
};

export default LogRecordStandbyView;
