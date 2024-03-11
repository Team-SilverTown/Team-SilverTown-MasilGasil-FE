import { useUI } from "@/components/uiContext/UiContext";
import usePostCreateContext from "../../context/PostCreateContext";
import { useMutation } from "@tanstack/react-query";
import { POST_KEY } from "@/lib/api/queryKeys";
import { postPostCreate } from "@/lib/api/Post/client";
import { PostCreateRequest } from "@/types/Request";

const usePostPinEditController = () => {
  const { postData, handleClickPin, handleRemovePin } = usePostCreateContext();
  const { setModalView, openModal } = useUI();

  const postMutation = useMutation({
    mutationKey: [POST_KEY.POST_POST_CREATE],
    mutationFn: (postData: PostCreateRequest) => postPostCreate({ postData }),
  });

  const handleCreatePost = () => {
    setModalView("CONFIRM_VIEW");

    openModal({
      message: "포스트를 등록하시겠나요?",
      acceptButtonText: "등록",
      onClickAccept: () => {
        postMutation.mutate(postData, {
          onSuccess: ({ id }) => {
            console.log("postId", id);
          },
        });
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
