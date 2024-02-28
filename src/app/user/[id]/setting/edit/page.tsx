import UserEditController from "./UserEdit.controller";

interface UserEditParams {
  id: string;
}

const UserEdit = ({ params }: { params: UserEditParams }) => {
  const { id } = params;

  return <UserEditController userId={id} />;
};

export default UserEdit;
