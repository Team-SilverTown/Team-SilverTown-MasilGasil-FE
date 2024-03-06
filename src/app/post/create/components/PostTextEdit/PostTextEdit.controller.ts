import { useForm } from "react-hook-form";
import { PostCreateInputValue } from "../../PostCreate.types";
import usePostCreateContext from "../../context/PostCreateContext";

const usePostTextEditController = () => {
  const { register } = useForm<PostCreateInputValue>();
  const { pageStep } = usePostCreateContext();

  return { pageStep, register };
};

export default usePostTextEditController;
