import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { PostCreateInputValue } from "../../PostCreate.types";
import usePostCreateContext from "../../context/PostCreateContext";

const usePostTextEditController = () => {
  const {
    postData,
    thumbnail,
    setThumbnail,
    setPageStep,
    handleCompleteStepOne,
    handleCreatePost,
  } = usePostCreateContext();

  const [isPublic, setIsPublic] = useState(postData.isPublic);
  const { register, setValue, watch, formState, handleSubmit } = useForm<PostCreateInputValue>({
    defaultValues: { content: "", title: "" },
    mode: "onChange",
  });
  const { errors } = formState;

  useEffect(() => {
    setIsPublic(postData.isPublic);
    setValue("content", postData.content);
    setValue("title", postData.title);
  }, [postData]);

  const isFullField = useMemo(() => {
    if (errors.content || errors.title) {
      return false;
    }

    return true;
  }, [watch(), errors]);

  const handleValid = ({ title, content }: PostCreateInputValue) => {
    handleCompleteStepOne({
      title,
      content,
      isPublic: isPublic,
    });

    setPageStep("POST_CREATE_PIN_EDIT");
    return;
  };

  return {
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
  };
};

export default usePostTextEditController;
