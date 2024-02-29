import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserEdit.styles";

import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { UserEditData } from "./UserEdit.types";

import useTheme from "@/lib/hooks/useTheme";
import { EditNickname } from "./components";

interface UserEditViewProps {
  register: UseFormRegister<UserEditData>;
  onSubmit: UseFormHandleSubmit<UserEditData>;
  onValid: (data: UserEditData) => void;
  onInValid: (error: FieldErrors) => void;

  onChangeNickname: () => void;
}

const UserEditView = ({
  register,
  onSubmit,
  onValid,
  onInValid,
  onChangeNickname,
}: UserEditViewProps) => {
  const theme = useTheme();
  if (!theme) {
    return;
  }

  return (
    <GS.CommonContainer
      style={{ height: "100%" }}
      onSubmit={onSubmit(onValid, onInValid)}
    >
      <S.UserEditLayout>
        <EditNickname
          register={register}
          onChangeNickname={onChangeNickname}
        />

        <div>성별</div>

        <div>나이</div>

        <div>키 , 체중</div>

        <div>강도</div>

        <button>테스트용 제출 버튼</button>
      </S.UserEditLayout>
    </GS.CommonContainer>
  );
};

export default UserEditView;
