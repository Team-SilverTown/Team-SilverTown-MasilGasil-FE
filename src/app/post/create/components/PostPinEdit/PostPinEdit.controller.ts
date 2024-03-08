import { useUI } from "@/components/uiContext/UiContext";
import usePostCreateContext from "../../context/PostCreateContext";

const usePostPinEditController = () => {
  const { postData, handleClickPin, handleRemovePin } = usePostCreateContext();
  const { setModalView, openModal } = useUI();

  const handleCreatePost = () => {
    setModalView("CONFIRM_VIEW");

    openModal({
      message: "포스트를 등록하시겠나요?",
      acceptButtonText: "등록",
      onClickAccept: () => {
        console.log(postData);
      },
    });
  };
  return {
    postData,
    handleClickPin,
    handleRemovePin,
    handleCreatePost,
  };
};

export default usePostPinEditController;
