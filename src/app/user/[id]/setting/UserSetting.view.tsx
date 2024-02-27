import * as GS from "@/styles/GlobalStyle";

import { TopNavigator } from "@/components/navigators/TopNavagtor";
import { GoBackButton } from "@/components/navigators/TopNavagtor/components";

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
