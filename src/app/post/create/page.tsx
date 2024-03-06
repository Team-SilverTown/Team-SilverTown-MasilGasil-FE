"use client";

import React from "react";
import { PostCreateContextProvider } from "./context/PostCreateContext";
import PostCreateView from "./PostCreate.view";

const PostCreate = () => {
  return (
    <PostCreateContextProvider>
      <PostCreateView />
    </PostCreateContextProvider>
  );
};

export default PostCreate;
