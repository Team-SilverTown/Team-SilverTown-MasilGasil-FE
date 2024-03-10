"use client";

import { checkDuplicateNickname, signUp } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";
import useEventQuery from "@/lib/hooks/useEventQuery";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import useAuthStore from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignInModel = () => {
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
    onSuccess: (data) => {
      console.log("success", data);
      setAuth({ isLogIn: true, serviceToken: token! });
      router.push("/home");
    },
    onError: (error) => console.log("error", error),
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

export default useSignInModel;
