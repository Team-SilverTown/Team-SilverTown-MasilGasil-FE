"use client";

import { InputLabel, Textarea } from "@/components";
import * as GS from "../../PostTextEdit.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PostCreateInputValue } from "@/app/post/create/PostCreate.types";
import { postCreateValidation } from "@/app/post/create/PostCreate.constants";

interface PostContentEditProps {
  register: UseFormRegister<PostCreateInputValue>;
  errors: FieldErrors<PostCreateInputValue>;
}

const PostContentEdit = ({ register, errors }: PostContentEditProps) => {
  return (
    <GS.PostTextEditInputContainer>
      <GS.PostTextEditInputTitle>설명</GS.PostTextEditInputTitle>
      <Textarea
        register={register("content", postCreateValidation.content)}
        placeholder="설명을 입력해주세요."
        style={{
          height: "20rem",
          fontSize: FONT_SIZE.MEDIUM,
          fontWeight: FONT_WEIGHT.MEDIUM,
        }}
      />
      <GS.PostTextEditWarning>
        {errors.content && (
          <InputLabel
            type="danger"
            text={errors.content.message}
          />
        )}
      </GS.PostTextEditWarning>
    </GS.PostTextEditInputContainer>
  );
};

export default PostContentEdit;
