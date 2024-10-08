import { useCallback, useState } from "react";

import { useUI } from "@/components/uiContext/UiContext";
import { fetchPostLikedToggle } from "@/lib/api/Post/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import useAuthStore from "@/lib/stores/useAuthStore";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { LikesResponse } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";

import { debounce } from "lodash";
import { useRouter } from "next/navigation";

interface UseLikeMutationProps {
  id: number;
  isLiked: boolean;
  likeCount: number;
}

const useLikeMutation = ({ id, isLiked, likeCount }: UseLikeMutationProps) => {
  const router = useRouter();
  const [isLike, setIsLike] = useState(isLiked);
  const [likes, setLikes] = useState(likeCount);
  const [isCurrentLiked, setIsCurrentLiked] = useState(isLiked);

  const { setModalView, openModal } = useUI();
  const { isLogIn } = useAuthStore();

  const likeMutation = useMutation({
    mutationKey: [POST_KEY.LIKED_STATUS],
    mutationFn: fetchPostLikedToggle,
    onSuccess: ({ isLike }: LikesResponse) => {
      setIsCurrentLiked(isLike);
      router.refresh();
    },
    onError: ({ message }) => {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({
        message: checkErrorCode({
          errorCode: message,
          defaultMessage: "해당 요청에 문제가 발생하였습니다.<br>잠시 후 다시 시도해주세요!",
        }),
      });
    },
  });

  const handleLikeMutation = useCallback(
    debounce((postId, isLike) => {
      if (isCurrentLiked === isLike) {
        return;
      }

      likeMutation.mutate({ postId: String(postId), data: { isLike: isLike } });
    }, 1000),
    [isCurrentLiked],
  );

  const handleClickLike = () => {
    if (!isLogIn) {
      setModalView("ACCESS_LOGIN_VIEW");
      openModal();
      return;
    }

    setLikes((likes) => (isLike ? likes - 1 : likes + 1));
    setIsLike((prevIsLike) => {
      const newIsLike = !prevIsLike;
      handleLikeMutation(id, newIsLike);
      return newIsLike;
    });
  };

  return {
    isLike,
    likes,
    handleClickLike,
  };
};

export default useLikeMutation;
