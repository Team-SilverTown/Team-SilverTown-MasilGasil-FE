"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as GS from "../../PostTextEdit.styles";
import * as TGS from "../../../../PostCreate.styles";
import { Input, InputLabel } from "@/components";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PostCreateInputValue } from "@/app/post/create/PostCreate.types";
import { postCreateValidation } from "@/app/post/create/PostCreate.constants";

interface PostTitleEditProps {
  register: UseFormRegister<PostCreateInputValue>;
  errors: FieldErrors<PostCreateInputValue>;
}

const PostTitleEdit = ({ register, errors }: PostTitleEditProps) => {
  return (
    <GS.PostTextEditInputContainer>
      <TGS.PostCreateContentTitle>제목</TGS.PostCreateContentTitle>
      <Input
        type="text"
        register={register("title", postCreateValidation.title)}
        placeholder="제목을 입력해주세요."
        style={{
          lineHeight: "2rem",
          width: "100%",
          fontSize: FONT_SIZE.MEDIUM,
          fontWeight: FONT_WEIGHT.SEMIBOLD,
        }}
      />
      <GS.PostTextEditWarning>
        {errors.title && (
          <InputLabel
            type="danger"
            text={errors.title.message}
          />
        )}
      </GS.PostTextEditWarning>
    </GS.PostTextEditInputContainer>
  );
};

export default PostTitleEdit;
