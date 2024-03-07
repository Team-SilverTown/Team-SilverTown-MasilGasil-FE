"use client";

import * as S from "./PostThumbnailEdit.styles";
import * as GS from "../../PostTextEdit.styles";
import * as TGS from "../../../../PostCreate.styles";
import InputUpload from "@/components/InputUpload/InputUpload";
import { PostCreateRequest } from "@/types/Request";
import Image from "@/components/icons/Image";
import useTheme from "@/lib/hooks/useTheme";

interface PostThumbnailEditProps {
  postData: PostCreateRequest;
  updateImage: (file: null | File) => void;
}

const PostThumbnailEdit = ({ postData, updateImage }: PostThumbnailEditProps) => {
  const theme = useTheme();
  return (
    <GS.PostTextEditInputContainer>
      <TGS.PostCreateContentTitle>메인 사진</TGS.PostCreateContentTitle>
      <InputUpload
        previewValue={postData.thumbnailUrl}
        updateFile={updateImage}
      >
        <S.PostThumbnailWrapper>
          <Image
            width={40}
            fill={theme?.gray_300}
          />
          클릭하여 썸네일 업로드
        </S.PostThumbnailWrapper>
      </InputUpload>
    </GS.PostTextEditInputContainer>
  );
};

export default PostThumbnailEdit;
