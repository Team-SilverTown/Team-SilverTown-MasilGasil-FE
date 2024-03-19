"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { signUp } from "@/lib/api/User/client";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import useLoadingSpinnerStore from "@/stores/ui/useLoadingSpinnerStore";
import useAuthStore from "@/stores/useAuthStore";
import { useUI } from "@/components/uiContext/UiContext";

const useSignUpModel = () => {
  const router = useRouter();

  const { setModalView, openModal, closeModal } = useUI();
  const { closeLoadingSpinner } = useLoadingSpinnerStore();

  const [selectedSex, setSelectedSex] = useState<"MALE" | "FEMALE" | null>(null);
  const [nickNameConfirm, setNickNameConfirm] = useState(false);

  const [focusedStep, setFocusedStep] = useState(0);
  const [checkAllPolicy, setCheckAllPolicy] = useState(false);
  const [policyCheck, setPolicyCheck] = useState<Array<boolean>>([]);

  const { setAuth } = useAuthStore();
  const [token, _] = useLocalStorage("serviceToken");

  const signUpMutation = useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
    onSuccess: () => {
      closeLoadingSpinner();
      setAuth({ isLogIn: true, serviceToken: token! });
      router.replace("/home");
    },
    onError: (error) => {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({
        message: `회원가입에 실패했습니다.<br>잠시 후 다시 시도해주세요.`,
      });
      closeLoadingSpinner();
    },
  });

  return {
    selectedSex,
    setSelectedSex,
    nickNameConfirm,
    setNickNameConfirm,
    focusedStep,
    setFocusedStep,
    checkAllPolicy,
    setCheckAllPolicy,
    policyCheck,
    setPolicyCheck,
    signUpMutation,
  };
};

export default useSignUpModel;
