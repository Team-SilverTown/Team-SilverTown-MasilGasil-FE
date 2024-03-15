"use client";

import { useUI } from "@/components/uiContext/UiContext";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import useAuthStore from "@/stores/useAuthStore";
import useMeStore from "@/stores/useMeStore";
import { signOut } from "next-auth/react";

const useUserSettingAccountController = () => {
  const { initMe } = useMeStore();
  const { setAuth } = useAuthStore();
  const [_, setToken] = useLocalStorage("serviceToken");
  const { setModalView, openModal } = useUI();

  const handleLogout = () => {
    setModalView("CONFIRM_VIEW");
    openModal({
      message: "로그아웃 하시겠어요?",
      onClickAccept: () => {
        initMe();
        setAuth({ isLogIn: false, serviceToken: undefined });
        setToken(null);
        signOut({ callbackUrl: "/" });
      },
    });
  };

  const handleDeployAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return { handleLogout, handleDeployAlert };
};

export default useUserSettingAccountController;
