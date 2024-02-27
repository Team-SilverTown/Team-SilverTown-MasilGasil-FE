import { AccountManager } from "@/components/icons";
import * as GS from "../../UserSetting.styles";

const UserSettingMemberView = () => {
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>회원</GS.UserSettingTitle>

      <GS.UserSettingContent>
        <GS.UserSettingIcon>
          <AccountManager />
        </GS.UserSettingIcon>

        <GS.UserSettingText>회원 수정</GS.UserSettingText>
      </GS.UserSettingContent>
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingMemberView;
