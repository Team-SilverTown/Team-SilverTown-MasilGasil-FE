"use client";

import { useCallback } from "react";

import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";
import { deletePost } from "@/lib/api/Post/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { useMutation } from "@tanstack/react-query";

interface PostKebabMenuProps {
  postId: string;
}

const PostKebabMenu = ({ postId }: PostKebabMenuProps) => {
  const { openModal, setModalView } = useUI();

  const deleteMutation = useMutation({
    mutationKey: [POST_KEY.DELETE_POST],
    mutationFn: deletePost,
    onSuccess: () => {},
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
    deleteMutation.mutate({ id: postId });
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
