"use client";

import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";

import { useUI } from "@/components/uiContext/UiContext";
import { checkDuplicateNickname, postEditUser } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";
import useMeStore from "@/lib/stores/useMeStore";
import { MeResponse } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";

import useUserEditModel from "./UserEdit.model";

import { throttle } from "lodash";
import { useRouter } from "next/navigation";

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
  const { setMe, userId } = useMeStore();
  const router = useRouter();

  const nickNameMutation = useMutation({
    mutationKey: [USER_KEY.CHECK_NICKNAME],
    mutationFn: (nickName: string) => checkDuplicateNickname(nickName),
  });

  const editUserMutation = useMutation({
    mutationKey: [USER_KEY.EDIT_USER],
    mutationFn: (newData: MeResponse) => postEditUser(newData),
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

  const changeUserData = useMemo(() => {
    return userDataChangeChecker(userDefaultData, watch());
  }, [watch()]);

  const handleValid = (data: MeResponse) => {
    if (!isCheckedNickname) {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({
        message: "닉네임 중복 확인을 진행해주세요.",
      });
      return;
    }

    editUserMutation.mutate(data, {
      onSuccess: (editedData) => {
        setMe(editedData);

        setModalView("DONE_VIEW");
        openModal({ message: "성공적으로 변경되었습니다!" });

        router.replace(`/user/${userId}`);
      },

      onError: () => {
        setModalView("ANIMATION_ALERT_VIEW");
        openModal({
          message: "업로드 과정에서 문제가 발생하였습니다.<br>잠시 후 다시 시도해주세요.",
        });
      },
    });
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
    changeUserData,
    handleValid,

    handleSubmit,
    selectedSex,
    selectedIntensity,
    isCheckedNickname,
    handleCheckSameNickName,
  };
};

export default useUserEditController;

const userDataChangeChecker = (prevData: MeResponse, currentData: MeResponse) => {
  const prev = JSON.stringify(prevData);
  const curr = JSON.stringify(currentData);

  if (prev === curr) {
    return false;
  }

  return true;
};
