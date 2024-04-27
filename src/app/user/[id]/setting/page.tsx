import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { getMe } from "@/lib/api/User/server";

import UserSettingView from "./UserSetting.view";

import { getServerSession } from "next-auth";

const Setting = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.serviceToken) {
    return;
  }

  const meData = await getMe();

  if (!meData) {
    return;
  }

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"설정"}
      />
      <UserSettingView meData={meData} />
    </>
  );
};

export default Setting;
