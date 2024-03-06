"use client";

import * as S from "./PostPublicEdit.styles";
import * as GS from "../../PostTextEdit.styles";
import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { Dispatch, SetStateAction } from "react";

interface PostPublicEditProps {
  isPublic: boolean;
  setIsPublic: Dispatch<SetStateAction<boolean>>;
}

const PostPublicEdit = ({ isPublic, setIsPublic }: PostPublicEditProps) => {
  const theme = useTheme();

  return (
    <GS.PostTextEditInputContainer>
      <GS.PostTextEditInputTitle>공개 여부</GS.PostTextEditInputTitle>
      <S.PostEditPublicActions>
        <Button
          width={"50%"}
          useRipple
          buttonColor={isPublic ? theme?.green_500 : theme?.gray_200}
          textColor={theme?.text_secondary_color}
          rippleColor={theme?.text_secondary_color + 50}
          style={{
            whiteSpace: "nowrap",
            fontSize: FONT_SIZE.H6,
            fontWeight: FONT_WEIGHT.SEMIBOLD,
            userSelect: "none",
          }}
          onClickHandler={() => setIsPublic(true)}
        >
          공개
        </Button>
        <Button
          width={"50%"}
          useRipple
          buttonColor={!isPublic ? theme?.green_500 : theme?.gray_200}
          textColor={theme?.text_secondary_color}
          rippleColor={theme?.text_secondary_color + 50}
          style={{
            whiteSpace: "nowrap",
            fontSize: FONT_SIZE.H6,
            fontWeight: FONT_WEIGHT.SEMIBOLD,
            userSelect: "none",
          }}
          onClickHandler={() => setIsPublic(false)}
        >
          비 공개
        </Button>
      </S.PostEditPublicActions>
    </GS.PostTextEditInputContainer>
  );
};

export default PostPublicEdit;
