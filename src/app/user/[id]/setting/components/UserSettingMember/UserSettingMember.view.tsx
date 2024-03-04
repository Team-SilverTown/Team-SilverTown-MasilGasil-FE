import { AccountManager } from "@/components/icons";
import * as GS from "../../UserSetting.styles";
import { SettingContent } from "..";

interface UserSettingMemberViewProps {
  onClick: () => void;
}

const UserSettingMemberView = ({ onClick }: UserSettingMemberViewProps) => {
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>회원</GS.UserSettingTitle>

      <SettingContent
        icon={<AccountManager />}
        text={"회원 수정"}
        onClick={onClick}
      />
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingMemberView;
