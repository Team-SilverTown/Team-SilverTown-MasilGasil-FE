"use client";

import { FieldErrors, useForm } from "react-hook-form";
import UserEditView from "./UserEdit.view";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { UserEditData } from "./UserEdit.types";
import useUserEditModel from "./UserEdit.model";

interface UserEditControllerProps {
  userId: string;
}

const FORM_DEFAULT_VALUE: UserEditData = {
  nickname: "임시값닉네임",
  sex: "male",
  age: 12,
  height: 182,
  weight: 150,
};

// userId 는 추후 유저의 데이터를 불러올때 사용
const UserEditController = ({ userId }: UserEditControllerProps) => {
  const { isCheckedNickname, setIsCheckedNickname } = useUserEditModel();
  const { register, handleSubmit, formState, getValues } = useForm<UserEditData>({
    mode: "onChange",
    defaultValues: FORM_DEFAULT_VALUE,
  });
  const { errors } = formState;

  const handleChangeNickname = () => {
    if (!isCheckedNickname) {
      return;
    }
    setIsCheckedNickname(false);
  };

  const handleValid = (data: UserEditData) => {
    console.log(data);
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
        getValues={getValues}
        onValid={handleValid}
        onInValid={handleInValid}
        onSubmit={handleSubmit}
        isCheckedNickname={isCheckedNickname}
        onChangeNickname={handleChangeNickname}
        onCheckSameNickname={handleCheckSameNickName}
      />
    </>
  );
};

export default UserEditController;
