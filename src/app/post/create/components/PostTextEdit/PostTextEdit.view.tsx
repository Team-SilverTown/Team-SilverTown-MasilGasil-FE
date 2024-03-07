"use client";

import * as GS from "../../PostCreate.styles";
import * as S from "./PostTextEdit.styles";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import usePostTextEditController from "./PostTextEdit.controller";
import { PostContentEdit, PostPublicEdit, PostTitleEdit } from "./components";

const PostTextEditView = () => {
  const theme = useTheme();
  const {
    pageStep,
    register,
    errors,
    isPublic,
    setIsPublic,
    isFullField,
    handleValid,

    handleSubmit,
  } = usePostTextEditController();

  return (
    <>
      <GS.PostCreateSheetContent>
        <PostTitleEdit
          register={register}
          errors={errors}
        />

        <PostContentEdit
          register={register}
          errors={errors}
        />

        <PostPublicEdit
          isPublic={isPublic}
          setIsPublic={setIsPublic}
        />
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
          onClickHandler={handleSubmit(handleValid)}
          disabled={!isFullField}
        >
          다음
        </Button>
      </GS.PostCreateButtonWrapper>
    </>
  );
};

export default PostTextEditView;
