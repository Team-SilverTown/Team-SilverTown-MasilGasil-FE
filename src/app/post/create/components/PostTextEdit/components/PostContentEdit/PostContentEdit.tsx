"use client";

import { InputLabel, Textarea } from "@/components";
import * as GS from "../../PostTextEdit.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { UseFormRegister } from "react-hook-form";
import { PostCreateInputValue } from "@/app/post/create/PostCreate.types";

interface PostContentEditProps {
  register: UseFormRegister<PostCreateInputValue>;
}

const PostContentEdit = ({ register }: PostContentEditProps) => {
  return (
    <GS.PostTextEditInputContainer>
      <GS.PostTextEditInputTitle>설명</GS.PostTextEditInputTitle>
      <Textarea
        register={register("content")}
        style={{
          height: "20rem",
          fontSize: FONT_SIZE.MEDIUM,
          fontWeight: FONT_WEIGHT.MEDIUM,
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

export default PostContentEdit;
