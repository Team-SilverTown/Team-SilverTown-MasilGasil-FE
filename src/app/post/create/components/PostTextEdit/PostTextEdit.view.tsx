"use client";

import * as GS from "../../PostCreate.styles";

import { PostCreateButton } from "..";
import usePostTextEditController from "./PostTextEdit.controller";
import { PostContentEdit, PostPublicEdit, PostThumbnailEdit, PostTitleEdit } from "./components";

const PostTextEditView = () => {
  const {
    postData,
    register,
    errors,
    isPublic,
    setIsPublic,
    isFullField,
    handleValid,

    handleSubmit,
    thumbnail,
    setThumbnail,
    handleCreatePost,
  } = usePostTextEditController();

  return (
    <>
      <GS.PostCreateSheetContent className="scrollbar-hide">
        <PostThumbnailEdit
          image={thumbnail ? thumbnail : postData.thumbnailUrl}
          updateImage={(file: File | null) => setThumbnail(file)}
        />

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
        {postData.pins.length > 0 && (
          <PostCreateButton
            text="다음"
            onClick={handleSubmit(handleValid)}
            disabled={!isFullField}
          />
        )}

        {postData.pins.length === 0 && (
          <PostCreateButton
            text="포스트 생성하기"
            onClick={handleCreatePost}
            disabled={!isFullField}
          />
        )}
      </GS.PostCreateButtonWrapper>
    </>
  );
};

export default PostTextEditView;
