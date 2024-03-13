"use client";

import { NotificationActive, PersonOff } from "@/components/icons";
import * as GS from "../../UserSetting.styles";
import { SettingContent } from "..";
import useUserSettingOptionsController from "./UserSettingOptions.controller";

const UserSettingOptionsView = () => {
  const {} = useUserSettingOptionsController();
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>설정</GS.UserSettingTitle>

      {/* TODO - 상태에따라 아이콘 변경 예정 */}
      {/* <PersonSearch /> */}
      <SettingContent
        icon={<PersonOff />}
        text={"계정 공개여부"}
        onClick={() => {}}
        isSwitch={true}
        switchType="ACCOUNT"
      />

      {/* TODO - 상태에따라 아이콘 변경 예정 */}
      {/* <NotificationOff /> */}
      {/* <SettingContent
        icon={<NotificationActive />}
        text={"알림 설정"}
        onClick={() => {}}
        isSwitch={true}
        switchType="NOTIFICATION"
      /> */}
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingOptionsView;
