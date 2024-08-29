"use client";

import { useCallback } from "react";

import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";
import { deleteMasil } from "@/lib/api/masil/client";
import { MASIL_KEY } from "@/lib/api/queryKeys";
import useMeStore from "@/lib/stores/useMeStore";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

interface LogKebabMenuProps {
  masilId: string;
}

const LogKebabMenu = ({ masilId }: LogKebabMenuProps) => {
  const { openModal, setModalView } = useUI();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { userId } = useMeStore();

  const deleteMutation = useMutation({
    mutationKey: [MASIL_KEY.DELETE_MASIL, masilId],
    mutationFn: deleteMasil,
    onSuccess: () => {
      router.replace(`/user/${userId}`);
      queryClient.clear();
      setModalView("DONE_VIEW");
      openModal({
        message: "산책 기록이 삭제되었습니다.",
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
      message: "산책 기록을 삭제하시겠어요?",
      warningMessage: "삭제후 되돌릴 수 없습니다.",
      onClickAccept: () => deleteMutation.mutate({ id: masilId }),
    });
  }, []);

  return (
    <div className=" mr-[1.5rem] cursor-pointer">
      <DropDownMenu
        onEdit={handleClickAlert}
        onDelete={handleClickDelete}
      />
    </div>
  );
};

export default LogKebabMenu;
