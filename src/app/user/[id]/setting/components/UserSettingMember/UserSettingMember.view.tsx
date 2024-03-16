"use client";

import * as GS from "../../UserSetting.styles";

import { AccountManager } from "@/components/icons";
import { SettingContent } from "..";
import useUserSettingMemberController from "./UserSettingMember.controller";

const UserSettingMemberView = () => {
  const { handleClick } = useUserSettingMemberController();
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>회원</GS.UserSettingTitle>

      <SettingContent
        icon={<AccountManager />}
        text={"회원 수정"}
        onClick={handleClick}
      />
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingMemberView;
