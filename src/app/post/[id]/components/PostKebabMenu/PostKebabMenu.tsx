"use client";

import { useCallback } from "react";

import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";
import { deletePost } from "@/lib/api/Post/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

interface PostKebabMenuProps {
  postId: string;
}

const PostKebabMenu = ({ postId }: PostKebabMenuProps) => {
  const { openModal, setModalView } = useUI();
  const router = useRouter();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: [POST_KEY.DELETE_POST],
    mutationFn: deletePost,
    onSuccess: () => {
      router.replace("/home");
      queryClient.clear();
      setModalView("DONE_VIEW");
      openModal({
        message: "게시물이 삭제되었습니다.",
      });
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

  const handleClickAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  const handleClickDelete = useCallback(() => {
    setModalView("CONFIRM_VIEW");
    openModal({
      message: "게시물을 삭제하시겠어요?",
      warningMessage: "삭제후 되돌릴 수 없습니다.",
      onClickAccept: () => deleteMutation.mutate({ id: postId }),
    });
  }, []);

  return (
    <div style={{ marginRight: "1.5rem", cursor: "pointer" }}>
      <DropDownMenu
        onEdit={handleClickAlert}
        onDelete={handleClickDelete}
      />
    </div>
  );
};

export default PostKebabMenu;
