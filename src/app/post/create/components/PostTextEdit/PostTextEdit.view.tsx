"use client";

import * as GS from "../../PostCreate.styles";
import * as S from "./PostTextEdit.styles";

import { Button, Input, InputLabel } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import usePostTextEditController from "./PostTextEdit.controller";

const PostTextEditView = () => {
  const theme = useTheme();
  const { pageStep, register, handleClickNextStep } = usePostTextEditController();

  return (
    <>
      <GS.PostCreateSheetContent>
        <S.PostTextEditTitleContainer>
          <S.PostTextEditInputTitle>제목</S.PostTextEditInputTitle>
          <Input
            type="text"
            register={register("title")}
            style={{
              lineHeight: "2rem",
              width: "100%",
              fontSize: FONT_SIZE.MEDIUM,
              fontWeight: FONT_WEIGHT.SEMIBOLD,
            }}
          />
          <S.PostTextEditWarning>
            <InputLabel
              type="danger"
              text={"이것은 경고 경고 경고 메세지여 경고"}
            />
          </S.PostTextEditWarning>
        </S.PostTextEditTitleContainer>
      </GS.PostCreateSheetContent>

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
          onClickHandler={handleClickNextStep}
        >
          다음
        </Button>
      </S.PostTextEditButtonWrapper>
    </>
  );
};

export default PostTextEditView;
