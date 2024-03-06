"use client";

import * as GS from "../../PostCreate.styles";
import * as S from "./PostTextEdit.styles";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import usePostTextEditController from "./PostTextEdit.controller";

const PostTextEditView = () => {
  const theme = useTheme();
  const { pageStep, register } = usePostTextEditController();

  return (
    <>
      <GS.PostCreateSheetContent></GS.PostCreateSheetContent>
      <S.PostTextEditButtonWrapper>
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
          다음
        </Button>
      </S.PostTextEditButtonWrapper>
    </>
  );
};

export default PostTextEditView;
