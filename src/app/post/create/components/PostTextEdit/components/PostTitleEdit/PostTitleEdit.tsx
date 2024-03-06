"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as GS from "../../PostTextEdit.styles";
import { Input, InputLabel } from "@/components";
import { UseFormRegister } from "react-hook-form";
import { PostCreateInputValue } from "@/app/post/create/PostCreate.types";

interface PostTitleEditProps {
  register: UseFormRegister<PostCreateInputValue>;
}

const PostTitleEdit = ({ register }: PostTitleEditProps) => {
  return (
    <GS.PostTextEditInputContainer>
      <GS.PostTextEditInputTitle>제목</GS.PostTextEditInputTitle>
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
      <GS.PostTextEditWarning>
        <InputLabel
          type="danger"
          text={"이것은 경고 경고 경고 메세지여 경고"}
        />
      </GS.PostTextEditWarning>
    </GS.PostTextEditInputContainer>
  );
};

export default PostTitleEdit;
