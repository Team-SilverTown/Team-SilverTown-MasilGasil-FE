import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import * as GS from "@/styles/GlobalStyle";

interface UserEditViewProps {}

const UserEditView = ({}: UserEditViewProps) => {
  return (
    <GS.CommonContainer style={{ height: "100%" }}>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"회원 정보 수정"}
      />
    </GS.CommonContainer>
  );
};

export default UserEditView;
