"use client";

import { useEffect, useRef, useState } from "react";

import { useUI } from "@/components/uiContext/UiContext";
import { getMe, patchIsPublic } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";
import useMeStore from "@/lib/stores/useMeStore";
import { MeResponse } from "@/types/Response";
import { useMutation, useQuery } from "@tanstack/react-query";

import { debounce } from "lodash";

interface UseUserSettingOptionsControllerProps {
  meData: MeResponse;
}

const useUserSettingOptionsController = ({ meData }: UseUserSettingOptionsControllerProps) => {
  const { setMe } = useMeStore();
  const { setModalView, openModal } = useUI();

  const [currentPublic, setCurrentPublic] = useState(meData.isPublic);

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
  }, [isRefetching]);

  const handleTogglePublic = useRef(
    debounce((state: boolean) => {
      if (state === meData.isPublic) {
        return;
      }

      publicMutation.mutate(undefined, {
        onSuccess: () => {
          refetch();
        },
        onError: () => {
          setModalView("ANIMATION_ALERT_VIEW");
          openModal({ message: "문제가 발생했습니다.<br>잠시 후 다시 시도해주세요!" });
        },
      });
    }, 1000),
  ).current;

  const handleClickButton = () => {
    setCurrentPublic((state) => {
      handleTogglePublic(!state);
      return !state;
    });
  };

  return { currentPublic, handleClickButton };
};

export default useUserSettingOptionsController;
