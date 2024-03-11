import { useUI } from "@/components/uiContext/UiContext";
import usePostCreateContext from "../../context/PostCreateContext";
import { useMutation } from "@tanstack/react-query";
import { POST_KEY } from "@/lib/api/queryKeys";
import { postPostCreate } from "@/lib/api/Post/client";
import { PostCreateRequest } from "@/types/Request";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const usePostPinEditController = () => {
  const { postData, handleClickPin, handleRemovePin } = usePostCreateContext();
  const { setModalView, openModal } = useUI();
  const router = useRouter();

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
            router.push(`/post/${id}`);

            setModalView("POST_CREATE_DONE_VIEW");
            openModal();
          },

          onError: () => {
            setModalView("LOG_RECORD_ALERT_VIEW");
            openModal({
              message: `산책로 저장에 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.`,
            });
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
