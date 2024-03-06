import { FieldErrors, useForm } from "react-hook-form";
import { PostCreateInputValue } from "../../PostCreate.types";
import usePostCreateContext from "../../context/PostCreateContext";
import { useEffect, useMemo, useState } from "react";

const usePostTextEditController = () => {
  const { postData, pageStep, setPageStep } = usePostCreateContext();

  const [isPublic, setIsPublic] = useState(() => {
    return postData.isPublic;
  });
  const { register, setValue, formState, handleSubmit } = useForm<PostCreateInputValue>({
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
  }, [errors]);

  const handleValid = (data: PostCreateInputValue) => {
    // 추후 데이터를 postData에 업로드
    setPageStep("POST_CREATE_PIN_EDIT");
  };

  return {
    pageStep,
    register,
    errors,
    isPublic,
    setIsPublic,
    isFullField,
    handleValid,
    handleSubmit,
  };
};

export default usePostTextEditController;
