"use client";

import * as GS from "../../UserSetting.styles";

import { PersonOff, PersonSearch } from "@/components/icons";
import { MeResponse } from "@/types/Response";

import { SettingContent } from "..";
import useUserSettingOptionsController from "./UserSettingOptions.controller";

interface UserSettingOptionsViewProps {
  meData: MeResponse;
}

const UserSettingOptionsView = ({ meData }: UserSettingOptionsViewProps) => {
  const { currentPublic, handleClickButton } = useUserSettingOptionsController({ meData });

  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>설정</GS.UserSettingTitle>

      {/* TODO - 상태에따라 아이콘 변경 예정 */}

      <SettingContent
        icon={currentPublic ? <PersonSearch /> : <PersonOff />}
        text={"계정 공개여부"}
        onClick={handleClickButton}
        isSwitch={true}
        isCheckedSwitch={currentPublic}
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
