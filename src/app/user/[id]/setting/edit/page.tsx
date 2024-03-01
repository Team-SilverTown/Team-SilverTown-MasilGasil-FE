import UserEditController from "./UserEdit.controller";
import { UserEditData } from "./UserEdit.types";

interface UserEditParams {
  id: string;
}

const FORM_DEFAULT_VALUE: UserEditData = {
  nickname: "임시값닉네임",
  sex: "female",
  birthDay: "1994-12-26",
  height: 182,
  weight: 150,
  intensity: "",
};

const UserEdit = ({ params }: { params: UserEditParams }) => {
  const { id } = params;

  return <UserEditController userData={FORM_DEFAULT_VALUE} />;
};

export default UserEdit;
