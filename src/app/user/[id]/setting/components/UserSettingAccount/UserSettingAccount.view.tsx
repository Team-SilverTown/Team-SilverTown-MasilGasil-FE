import { AccountDelete, LogOut } from "@/components/icons";
import * as GS from "../../UserSetting.styles";
import { SettingContent } from "..";

const UserSettingAccountView = () => {
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>계정 관리</GS.UserSettingTitle>

      <SettingContent
        icon={<LogOut />}
        text={"로그아웃"}
        onClick={() => {}}
      />

      <SettingContent
        icon={<AccountDelete />}
        text={"회원탈퇴"}
        onClick={() => {}}
      />
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingAccountView;
