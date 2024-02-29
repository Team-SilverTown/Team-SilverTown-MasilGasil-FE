"use client";

import { FieldErrors, useForm } from "react-hook-form";
import UserEditView from "./UserEdit.view";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { UserEditData } from "./UserEdit.types";
import useUserEditModel from "./UserEdit.model";
import { useEffect } from "react";

interface UserEditControllerProps {
  userData: UserEditData;
}

// userId 는 추후 유저의 데이터를 불러올때 사용
const UserEditController = ({ userData }: UserEditControllerProps) => {
  const { isCheckedNickname, setIsCheckedNickname } = useUserEditModel();
  const { register, handleSubmit, watch, formState, getValues } = useForm<UserEditData>({
    mode: "onChange",
    defaultValues: userData,
  });
  const { errors } = formState;

  const newNickname = watch("nickname");
  const selectedValue = watch("sex");
  useEffect(() => {
    if (userData.nickname === newNickname) {
      setIsCheckedNickname(true);
      return;
    }

    if (isCheckedNickname) {
      setIsCheckedNickname(false);
    }
  }, [newNickname]);

  const handleValid = (data: UserEditData) => {
    console.log(data);
    /*
      TODO

      최종 검증 후 업데이트 로직 수행
    */
  };

  const handleInValid = (error: FieldErrors) => {
    console.log(error);
  };

  const handleCheckSameNickName = () => {
    const newNickname = getValues("nickname");

    // TODO - API 연결로 인해 중복 닉네임 체크후 없는 닉네임이라면 통과처리

    // if(){
    //   console.log(newNickname);
    // }

    setIsCheckedNickname(true);
  };

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"회원 정보 수정"}
      />
      <UserEditView
        register={register}
        errors={errors}
        onValid={handleValid}
        onInValid={handleInValid}
        onSubmit={handleSubmit}
        isCheckedNickname={isCheckedNickname}
        onCheckSameNickname={handleCheckSameNickName}
      />
    </>
  );
};

export default UserEditController;
