import UserEditController from "./UserEdit.controller";
import { UserEditData } from "./UserEdit.types";

interface UserEditParams {
  id: string;
}

const FORM_DEFAULT_VALUE: UserEditData = {
  nickname: "임시값닉네임",
  sex: "male",
  age: 12,
  height: 182,
  weight: 150,
};

const UserEdit = ({ params }: { params: UserEditParams }) => {
  const { id } = params;

  return <UserEditController userData={FORM_DEFAULT_VALUE} />;
};

export default UserEdit;
