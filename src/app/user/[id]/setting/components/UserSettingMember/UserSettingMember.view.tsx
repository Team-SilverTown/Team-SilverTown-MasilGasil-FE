import { AccountManager } from "@/components/icons";
import * as GS from "../../UserSetting.styles";
import { SettingContent } from "..";

const UserSettingMemberView = () => {
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>회원</GS.UserSettingTitle>

      <SettingContent
        icon={<AccountManager />}
        text={"회원 수정"}
        onClick={() => {}}
      />
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingMemberView;
