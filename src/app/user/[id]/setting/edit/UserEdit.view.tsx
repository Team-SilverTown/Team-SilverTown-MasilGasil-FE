import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserEdit.styles";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

interface UserEditViewProps {}

const UserEditView = ({}: UserEditViewProps) => {
  return (
    <GS.CommonContainer style={{ height: "100%" }}>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={"회원 정보 수정"}
      />

      <S.UserEditLayout>
        <div>닉네임</div>

        <div>성별</div>

        <div>나이</div>

        <div>키 , 체중</div>

        <div>강도</div>
      </S.UserEditLayout>
    </GS.CommonContainer>
  );
};

export default UserEditView;
