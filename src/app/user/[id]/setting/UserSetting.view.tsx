"use client";

import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserSetting.styles";

import { UserSettingAccount, UserSettingMember, UserSettingOptions } from "./components";

const UserSettingView = () => {
  return (
    <GS.CommonContainer style={{ height: "100%" }}>
      <S.UserSettingLayout
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      >
        <UserSettingOptions />

        <S.Divider />

        <UserSettingMember />

        <S.Divider />

        <UserSettingAccount />

        <S.Divider />
      </S.UserSettingLayout>
    </GS.CommonContainer>
  );
};

export default UserSettingView;
