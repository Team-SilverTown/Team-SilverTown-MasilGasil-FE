import { Button } from "@/components";
import * as GS from "../../PostCreate.styles";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

const PostPinEditView = () => {
  const theme = useTheme();
  return (
    <>
      <GS.PostCreateSheetContent>
        <GS.PostCreateContentTitle>핀 수정하기</GS.PostCreateContentTitle>
      </GS.PostCreateSheetContent>

      <GS.PostCreateButtonWrapper>
        <Button
          width={"100%"}
          useRipple
          buttonColor={theme?.green_500}
          textColor={theme?.text_secondary_color}
          rippleColor={theme?.text_secondary_color + 50}
          style={{
            whiteSpace: "nowrap",
            fontSize: FONT_SIZE.H6,
            fontWeight: FONT_WEIGHT.SEMIBOLD,
            userSelect: "none",
          }}
          onClickHandler={() => {}}
        >
          산책로 등록하기
        </Button>
      </GS.PostCreateButtonWrapper>
    </>
  );
};

export default PostPinEditView;
