"use client";

import { FieldErrors, useForm } from "react-hook-form";

import useUserEditModel from "./UserEdit.model";
import { useEffect, useRef } from "react";
import { MeResponse } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";
import { USER_KEY } from "@/lib/api/queryKeys";
import { checkDuplicateNickname } from "@/lib/api/User/client";
import { throttle } from "lodash";

interface UserEditControllerProps {
  userDefaultData: MeResponse;
}

// userId 는 추후 유저의 데이터를 불러올때 사용
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

  const handleValid = (data: MeResponse) => {
    console.log(data);
    /*
      TODO

      최종 검증 후 업데이트 로직 수행
    */
  };

  const handleCheckSameNickName = useRef(
    throttle(() => {
      const newNickname = getValues("nickname");
      console.log(newNickname);
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
