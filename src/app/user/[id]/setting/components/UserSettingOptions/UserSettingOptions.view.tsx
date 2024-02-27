import { NotificationActive, NotificationOff, PersonOff, PersonSearch } from "@/components/icons";
import * as GS from "../../UserSetting.styles";

const UserSettingOptionsView = () => {
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>설정</GS.UserSettingTitle>

      <GS.UserSettingContent>
        <GS.UserSettingIcon>
          <PersonOff />
          {/* <PersonSearch /> */}
        </GS.UserSettingIcon>

        <GS.UserSettingText>계정 공개여부</GS.UserSettingText>
      </GS.UserSettingContent>

      <GS.UserSettingContent>
        <GS.UserSettingIcon>
          <NotificationActive />
          {/* <NotificationOff /> */}
        </GS.UserSettingIcon>

        <GS.UserSettingText>알림 설정</GS.UserSettingText>
      </GS.UserSettingContent>
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingOptionsView;
