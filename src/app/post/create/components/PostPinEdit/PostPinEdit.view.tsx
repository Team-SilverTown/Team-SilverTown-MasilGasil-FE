"use client";

import * as S from "./PostPinEdit.styles";
import * as GS from "../../PostCreate.styles";

import { Button, PinEditSlideButton } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import usePostPinEditController from "./PostPinEdit.controller";

const PostPinEditView = () => {
  const theme = useTheme();
  const { postData, handleClickPin, handleRemovePin, handleCreatePost } =
    usePostPinEditController();
  return (
    <>
      <GS.PostCreateSheetContent>
        <GS.PostCreateContentTitle>핀 수정하기</GS.PostCreateContentTitle>
        <S.PostPinEditPinList>
          {postData.pins.length > 0 &&
            postData.pins.map((pin, index) => (
              <PinEditSlideButton
                key={index}
                pin={pin}
                pinIndex={index}
                onClickPin={handleClickPin}
                removePin={handleRemovePin}
              />
            ))}
          {postData.pins.length === 0 && "수정하실 핀이 존재하지 않습니다."}
        </S.PostPinEditPinList>
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
          onClickHandler={handleCreatePost}
        >
          산책로 등록하기
        </Button>
      </GS.PostCreateButtonWrapper>
    </>
  );
};

export default PostPinEditView;
