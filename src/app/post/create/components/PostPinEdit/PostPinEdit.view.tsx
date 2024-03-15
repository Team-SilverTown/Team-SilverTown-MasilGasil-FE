"use client";

import * as S from "./PostPinEdit.styles";
import * as GS from "../../PostCreate.styles";

import { PinEditSlideButton } from "@/components";
import usePostPinEditController from "./PostPinEdit.controller";
import { PostCreateButton } from "..";

const PostPinEditView = () => {
  const { postData, handleClickPin, handleRemovePin, handleCreatePost } =
    usePostPinEditController();
  return (
    <>
      <GS.PostCreateSheetContent className="scrollbar-hide">
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
        <PostCreateButton
          text="산책로 등록하기"
          onClick={handleCreatePost}
        />
      </GS.PostCreateButtonWrapper>
    </>
  );
};

export default PostPinEditView;
