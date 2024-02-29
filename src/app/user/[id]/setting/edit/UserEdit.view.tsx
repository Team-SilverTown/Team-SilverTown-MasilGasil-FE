import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserEdit.styles";

interface UserEditViewProps {}

const UserEditView = ({}: UserEditViewProps) => {
  return (
    <GS.CommonContainer style={{ height: "100%" }}>
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
