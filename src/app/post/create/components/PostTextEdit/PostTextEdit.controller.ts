import { useForm } from "react-hook-form";
import { PostCreateInputValue } from "../../PostCreate.types";
import usePostCreateContext from "../../context/PostCreateContext";

const usePostTextEditController = () => {
  const { register } = useForm<PostCreateInputValue>();
  const { pageStep, setPageStep } = usePostCreateContext();

  const handleClickNextStep = () => {};

  return { pageStep, register, handleClickNextStep };
};

export default usePostTextEditController;
