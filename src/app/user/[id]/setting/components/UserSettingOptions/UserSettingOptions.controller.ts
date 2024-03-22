"use client";

import { useUI } from "@/components/uiContext/UiContext";
import { getMe, patchIsPublic } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";
import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";
import useMeStore from "@/lib/stores/useMeStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useUserSettingOptionsController = () => {
  const { isPublic, setMe } = useMeStore();
  const { showLoadingSpinner, closeLoadingSpinner } = useLoadingSpinnerStore();
  const { setModalView, openModal } = useUI();

  const publicMutation = useMutation({
    mutationKey: [USER_KEY.TOGGLE_PUBLIC],
    mutationFn: () => patchIsPublic(),
  });

  const { data, isRefetching, refetch } = useQuery({
    queryKey: [USER_KEY.ME],
    queryFn: () => getMe(),
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    setMe(data);
    closeLoadingSpinner();
  }, [isRefetching]);

  const handleTogglePublic = () => {
    showLoadingSpinner();

    publicMutation.mutate(undefined, {
      onSuccess: () => {
        refetch();
      },
      onError: () => {
        setModalView("ANIMATION_ALERT_VIEW");
        openModal({ message: "문제가 발생했습니다.<br>잠시 후 다시 시도해주세요!" });
      },
    });
  };

  return { isPublic, handleTogglePublic };
};

export default useUserSettingOptionsController;
