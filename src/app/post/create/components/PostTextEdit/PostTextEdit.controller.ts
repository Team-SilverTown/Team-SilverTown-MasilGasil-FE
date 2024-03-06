import { useForm } from "react-hook-form";
import { PostCreateInputValue } from "../../PostCreate.types";
import usePostCreateContext from "../../context/PostCreateContext";
import { useEffect, useState } from "react";

const usePostTextEditController = () => {
  const { postData, pageStep, setPageStep } = usePostCreateContext();

  const [isPublic, setIsPublic] = useState(() => {
    return postData.isPublic;
  });
  const { register, setValue } = useForm<PostCreateInputValue>();

  useEffect(() => {
    setIsPublic(postData.isPublic);
    setValue("content", postData.content);
    setValue("title", postData.title);
  }, [postData]);

  const handleClickNextStep = () => {
    setPageStep("POST_CREATE_PIN_EDIT");
  };

  return { pageStep, register, isPublic, setIsPublic, handleClickNextStep };
};

export default usePostTextEditController;
