import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { getMe } from "@/lib/api/User/server";

import UserEditView from "./UserEdit.view";

import { getServerSession } from "next-auth";

const UserEdit = async () => {
  const defaultData = await getMe();

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
