import { AccountDelete, LogOut } from "@/components/icons";
import * as GS from "../../UserSetting.styles";

const UserSettingAccountView = () => {
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>계정 관리</GS.UserSettingTitle>

      <GS.UserSettingContent>
        <GS.UserSettingIcon>
          <LogOut />
        </GS.UserSettingIcon>

        <GS.UserSettingText>로그아웃</GS.UserSettingText>
      </GS.UserSettingContent>

      <GS.UserSettingContent>
        <GS.UserSettingIcon>
          <AccountDelete />
        </GS.UserSettingIcon>

        <GS.UserSettingText>회원탈퇴</GS.UserSettingText>
      </GS.UserSettingContent>
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingAccountView;
