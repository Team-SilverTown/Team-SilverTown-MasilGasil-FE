import { getMe } from "@/lib/api/User/server";
import UserEditController from "./UserEdit.controller";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import UserEditView from "./UserEdit.view";

const UserEdit = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.serviceToken) {
    return;
  }

  const defaultData = await getMe(session.serviceToken);

  if (!defaultData) {
    return;
  }

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"회원 정보 수정"}
      />
      <UserEditView userDefaultData={defaultData} />
    </>
  );
};

export default UserEdit;
