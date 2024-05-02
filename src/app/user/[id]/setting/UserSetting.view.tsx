"use client";

import * as S from "./UserSetting.styles";
import * as GS from "@/styles/GlobalStyle";
import { NAV_HEIGHT } from "@/styles/theme";

import { Divider } from "@/components/Divider";
import { MeResponse } from "@/types/Response";

import { UserSettingAccount, UserSettingMember, UserSettingOptions } from "./components";

interface UserSettingViewProps {
  meData: MeResponse;
}

const UserSettingView = ({ meData }: UserSettingViewProps) => {
  return (
    <GS.CommonContainer style={{ height: "100%", paddingTop: `${NAV_HEIGHT + 2}rem` }}>
      <S.UserSettingLayout
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      >
        <UserSettingOptions meData={meData} />

        <Divider className="h-[0.1rem] min-h-[0.1rem]" />

        <UserSettingMember />

        <Divider className="h-[0.1rem] min-h-[0.1rem]" />

        <UserSettingAccount />
      </S.UserSettingLayout>
    </GS.CommonContainer>
  );
};

export default UserSettingView;
