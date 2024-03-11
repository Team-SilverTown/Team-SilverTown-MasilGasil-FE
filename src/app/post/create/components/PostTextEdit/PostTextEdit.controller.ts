import { FieldErrors, useForm } from "react-hook-form";
import { PostCreateInputValue } from "../../PostCreate.types";
import usePostCreateContext from "../../context/PostCreateContext";
import { useEffect, useMemo, useState } from "react";
import useImageUpload from "@/lib/hooks/useImageUpload";

const usePostTextEditController = () => {
  const { postData, defaultData, pageStep, setPageStep, handleCompleteStepOne } =
    usePostCreateContext();

  const [isPublic, setIsPublic] = useState(() => {
    return postData.isPublic;
  });
  const { register, setValue, watch, formState, handleSubmit } = useForm<PostCreateInputValue>({
    defaultValues: { content: "", title: "" },
    mode: "onChange",
  });
  const { errors } = formState;
  const imageMutation = useImageUpload();

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

  const handleValid = ({ title, content, thumbnail }: PostCreateInputValue) => {
    if (!thumbnail) {
      handleCompleteStepOne({
        title,
        content,
        isPublic: isPublic,
        thumbnailUrl: defaultData.thumbnailUrl,
      });

      setPageStep("POST_CREATE_PIN_EDIT");
      return;
    }

    imageMutation.mutate(thumbnail, {
      onSuccess: ({ imageUrl }) => {
        handleCompleteStepOne({
          title,
          content,
          isPublic: isPublic,
          thumbnailUrl: imageUrl,
        });

        setPageStep("POST_CREATE_PIN_EDIT");
      },
    });
  };

  return {
    postData,
    pageStep,
    register,
    setValue,
    errors,
    isPublic,
    setIsPublic,
    isFullField,
    handleValid,
    handleSubmit,
  };
};

export default usePostTextEditController;
