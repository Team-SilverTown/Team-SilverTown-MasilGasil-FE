"use client";

import { useForm } from "react-hook-form";
import UserEditView from "./UserEdit.view";

interface UserEditControllerProps {
  userId: string;
}

interface UserData {
  nickname: string;
  sex: "male" | "female";
  age: number;
  height: number;
  weight: number;
}

const FORM_DEFAULT_VALUE: UserData = {
  nickname: "",
  sex: "male",
  age: 12,
  height: 182,
  weight: 150,
};

const UserEditController = ({ userId }: UserEditControllerProps) => {
  const {} = useForm<UserData>({
    mode: "onChange",
    defaultValues: FORM_DEFAULT_VALUE,
  });

  // 추후 userId를 이용해 사용자 정보를 호출할 예정
  console.log(userId);
  return <UserEditView />;
};

export default UserEditController;
