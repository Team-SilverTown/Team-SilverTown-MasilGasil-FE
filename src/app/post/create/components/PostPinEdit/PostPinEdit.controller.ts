import usePostCreateContext from "../../context/PostCreateContext";

const usePostPinEditController = () => {
  const { postData, handleClickPin, handleRemovePin } = usePostCreateContext();

  return {
    postData,
    handleClickPin,
    handleRemovePin,
  };
};

export default usePostPinEditController;
