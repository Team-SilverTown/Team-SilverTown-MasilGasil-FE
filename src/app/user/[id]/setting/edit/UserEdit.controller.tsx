"use client";

import UserEditView from "./UserEdit.view";

interface UserEditControllerProps {
  userId: string;
}

const UserEditController = ({ userId }: UserEditControllerProps) => {
  // 추후 userId를 이용해 사용자 정보를 호출할 예정
  console.log(userId);
  return <UserEditView />;
};

export default UserEditController;
