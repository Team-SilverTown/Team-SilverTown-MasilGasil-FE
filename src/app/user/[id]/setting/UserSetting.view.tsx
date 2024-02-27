"use client";

import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserSetting.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

const UserSettingView = () => {
  return (
    <GS.CommonContainer style={{ height: "100%" }}>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"설정"}
      />

      <S.UserSettingLayout>
        <div>설정</div>

        <div>토글 1</div>
        <div>토글 2</div>

        <div></div>
      </S.UserSettingLayout>
    </GS.CommonContainer>
  );
};

export default UserSettingView;
