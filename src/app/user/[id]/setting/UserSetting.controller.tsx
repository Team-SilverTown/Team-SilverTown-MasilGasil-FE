import { TopNavigator } from "@/components/navigators/TopNavigator";
import UserSettingView from "./UserSetting.view";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

export const UserSettingController = () => {
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
