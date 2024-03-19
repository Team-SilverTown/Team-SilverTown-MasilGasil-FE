"use client";

import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserSetting.styles";

import { UserSettingAccount, UserSettingMember, UserSettingOptions } from "./components";
import Divider from "@/components/Divider/Divider";
import { NAV_HEIGHT } from "@/styles/theme";

const UserSettingView = () => {
  return (
    <GS.CommonContainer style={{ height: "100%", paddingTop: `${NAV_HEIGHT + 2}rem` }}>
      <S.UserSettingLayout
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      >
        <UserSettingOptions />

        <Divider className="h-[0.1rem] min-h-[0.1rem]" />

        <UserSettingMember />

        <Divider className="h-[0.1rem] min-h-[0.1rem]" />

        <UserSettingAccount />
      </S.UserSettingLayout>
    </GS.CommonContainer>
  );
};

export default UserSettingView;
