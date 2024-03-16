"use client";

import usePostCreateContext from "../../context/PostCreateContext";

const usePostPinEditController = () => {
  const { postData, handleClickPin, handleRemovePin, handleCreatePost } = usePostCreateContext();

  return {
    postData,
    handleClickPin,
    handleRemovePin,
    handleCreatePost,
  };
};

export default usePostPinEditController;
