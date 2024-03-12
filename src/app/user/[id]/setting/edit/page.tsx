import { getMe } from "@/lib/api/User/server";
import UserEditController from "./UserEdit.controller";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const UserEdit = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.serviceToken) {
    return;
  }

  const defaultData = await getMe(session.serviceToken);

  if (!defaultData) {
    return;
  }

  return <UserEditController userData={defaultData} />;
};

export default UserEdit;
