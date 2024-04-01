import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

import UserSettingView from "./UserSetting.view";

const Setting = () => {
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"설정"}
      />
      <UserSettingView />
    </>
  );
};

export default Setting;
