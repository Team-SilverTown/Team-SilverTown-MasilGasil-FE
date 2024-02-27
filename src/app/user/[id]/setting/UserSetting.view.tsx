"use client";

import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserSetting.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { UserSettingAccount, UserSettingMember, UserSettingOptions } from "./components";

const UserSettingView = () => {
  return (
    <GS.CommonContainer style={{ height: "100%" }}>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"설정"}
      />

      <S.UserSettingLayout>
        <UserSettingOptions />

        <S.UserSettingDivideLine />

        <UserSettingMember />

        <S.UserSettingDivideLine />

        <UserSettingAccount />

        <S.UserSettingDivideLine />
      </S.UserSettingLayout>
    </GS.CommonContainer>
  );
};

export default UserSettingView;
