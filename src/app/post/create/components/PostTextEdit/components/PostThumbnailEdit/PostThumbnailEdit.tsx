"use client";

import * as TGS from "../../../../PostCreate.styles";
import * as GS from "../../PostTextEdit.styles";
import * as S from "./PostThumbnailEdit.styles";

import { useEffect, useState } from "react";

import InputUpload from "@/components/InputUpload/InputUpload";
import Image from "@/components/icons/Image";
import useTheme from "@/lib/hooks/useTheme";

interface PostThumbnailEditProps {
  image: File | string | null;
  updateImage: (file: null | File) => void;
}

const PostThumbnailEdit = ({ image, updateImage }: PostThumbnailEditProps) => {
  const theme = useTheme();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!image) {
      return;
    }

    if (typeof image !== "string") {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreview(reader.result);
          return;
        }
      };

      reader.readAsDataURL(image);
      return;
    }

    setPreview(image);
  }, [image]);

  return (
    <GS.PostTextEditInputContainer>
      <TGS.PostCreateContentTitle>메인 사진</TGS.PostCreateContentTitle>
      <InputUpload
        previewValue={preview}
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
