import * as GS from "@/styles/GlobalStyle";

import { UserSettingAccount, UserSettingMember, UserSettingOptions } from "./components";
import Divider from "@/components/Divider/Divider";

const UserSettingView = () => {
  return (
    <GS.CommonContainer style={{ height: "100%" }}>
      <S.UserSettingLayout
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      >
        <UserSettingOptions />

        <Divider />

        <UserSettingMember />

        <Divider />

        <UserSettingAccount />

        <Divider />
      </S.UserSettingLayout>
    </GS.CommonContainer>
  );
};

export default UserSettingView;
