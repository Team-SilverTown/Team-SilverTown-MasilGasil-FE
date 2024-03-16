"use client";

import { signUp } from "@/lib/api/User/client";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import useAuthStore from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignUpModel = () => {
  const router = useRouter();

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
      setAuth({ isLogIn: true, serviceToken: token! });
      router.replace("/home");
    },
    onError: (error) => {},
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
