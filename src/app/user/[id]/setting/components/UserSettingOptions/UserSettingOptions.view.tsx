"use client";

import { PersonOff, PersonSearch } from "@/components/icons";
import * as GS from "../../UserSetting.styles";
import { SettingContent } from "..";
import useUserSettingOptionsController from "./UserSettingOptions.controller";

const UserSettingOptionsView = () => {
  const { isPublic, handleTogglePublic } = useUserSettingOptionsController();

  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>설정</GS.UserSettingTitle>

      <SettingContent
        icon={isPublic ? <PersonSearch /> : <PersonOff />}
        text={"계정 공개여부"}
        onClick={handleTogglePublic}
        isSwitch={true}
        isCheckedSwitch={isPublic}
        switchType="ACCOUNT"
      />
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingOptionsView;
