"use client";

import * as GS from "../../UserSetting.styles";

import { AccountDelete, LogOut } from "@/components/icons";
import { SettingContent } from "..";
import useUserSettingAccountController from "./UserSettingAccount.controller";

const UserSettingAccountView = () => {
  const {} = useUserSettingAccountController();

  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>계정 관리</GS.UserSettingTitle>

      {/* TODO - 로그아웃 API 연결 */}
      <SettingContent
        icon={<LogOut />}
        text={"로그아웃"}
        onClick={() => {}}
      />

      {/* TODO - 탈퇴 Confirm  */}
      <SettingContent
        icon={<AccountDelete />}
        text={"회원탈퇴"}
        onClick={() => {}}
      />
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingAccountView;
