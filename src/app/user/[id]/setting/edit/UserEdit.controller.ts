"use client";

import { useForm } from "react-hook-form";

import useUserEditModel from "./UserEdit.model";
import { useEffect, useRef } from "react";
import { MeResponse } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";
import { USER_KEY } from "@/lib/api/queryKeys";
import { checkDuplicateNickname } from "@/lib/api/User/client";
import { throttle } from "lodash";
import { useUI } from "@/components/uiContext/UiContext";

interface UserEditControllerProps {
  userDefaultData: MeResponse;
}

const useUserEditController = ({ userDefaultData }: UserEditControllerProps) => {
  const {
    isCheckedNickname,
    setIsCheckedNickname,
    nickNameButtonDisabled,
    setNickNameButtonDisabled,
  } = useUserEditModel();
  const { register, handleSubmit, watch, formState, getValues, setError } = useForm<MeResponse>({
    mode: "onChange",
    defaultValues: userDefaultData,
  });
  const { errors } = formState;

  const newNickname = watch("nickname");
  const selectedSex = watch("sex");
  const selectedIntensity = watch("exerciseIntensity");

  const { setModalView, openModal } = useUI();

  const nickNameMutation = useMutation({
    mutationKey: [USER_KEY.CHECK_NICKNAME],
    mutationFn: (nickName: string) => checkDuplicateNickname(nickName),
  });

  useEffect(() => {
    if (userDefaultData.nickname === newNickname) {
      setIsCheckedNickname(true);
      setNickNameButtonDisabled(true);
      return;
    }

    if (isCheckedNickname) {
      setIsCheckedNickname(false);
      setNickNameButtonDisabled(false);
    }
  }, [newNickname]);

  // 닉네임 중복 확인을 진행해주세요.
  const handleValid = (data: MeResponse) => {
    if (!isCheckedNickname) {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({
        message: "닉네임 중복 확인을 진행해주세요.",
      });
      return;
    }

    /*
      TODO

      최종 검증 후 업데이트 로직 수행
    */

    console.log("등록되어야함");
  };

  const handleCheckSameNickName = useRef(
    throttle(() => {
      const newNickname = getValues("nickname");

      if (errors.nickname) {
        return;
      }

      nickNameMutation.mutate(newNickname, {
        onSuccess: ({ isDuplicated, nickname }) => {
          if (newNickname !== nickname) {
            setError("nickname", { message: "닉네임 중복검사 과정에서 문제가 발생하였습니다." });
            return;
          }

          if (isDuplicated) {
            setError("nickname", { message: "이미 사용중인 닉네임 입니다." });
            return;
          }

          setIsCheckedNickname(true);
        },
      });

      setNickNameButtonDisabled(true);
    }, 2000),
  ).current;

  return {
    register,
    errors,
    nickNameButtonDisabled,
    handleValid,

    handleSubmit,
    selectedSex,
    selectedIntensity,
    isCheckedNickname,
    handleCheckSameNickName,
  };
};

export default useUserEditController;
