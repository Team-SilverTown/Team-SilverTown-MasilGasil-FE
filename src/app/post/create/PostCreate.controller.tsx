import usePostCreateContext from "./context/PostCreateContext";

const usePostCreateController = () => {
  const { pageStep } = usePostCreateContext();
  return {
    pageStep,
  };
};

export default usePostCreateController;
