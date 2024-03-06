import { useForm } from "react-hook-form";
import { PostCreateInputValue } from "../../PostCreate.types";
import usePostCreateContext from "../../context/PostCreateContext";
import { useState } from "react";

const usePostTextEditController = () => {
  const [isPublic, setIsPublic] = useState(true);
  const { register } = useForm<PostCreateInputValue>();
  const { pageStep, setPageStep } = usePostCreateContext();

  const handleClickNextStep = () => {};

  return { pageStep, register, isPublic, setIsPublic, handleClickNextStep };
};

export default usePostTextEditController;
