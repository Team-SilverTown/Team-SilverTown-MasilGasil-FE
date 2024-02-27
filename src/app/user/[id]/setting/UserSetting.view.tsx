import * as GS from "@/styles/GlobalStyle";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

const UserSettingView = () => {
  return (
    <GS.CommonContainer>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"설정"}
      />
    </GS.CommonContainer>
  );
};

export default UserSettingView;
