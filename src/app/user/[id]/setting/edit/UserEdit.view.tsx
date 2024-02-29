import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserEdit.styles";

import {
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { UserEditData } from "./UserEdit.types";

import { EditNickname } from "./components";

interface UserEditViewProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;

  getValues: UseFormGetValues<UserEditData>;
  onSubmit: UseFormHandleSubmit<UserEditData>;
  onValid: (data: UserEditData) => void;
  onInValid: (error: FieldErrors) => void;

  isCheckedNickname: boolean;
  onChangeNickname: () => void;
  onCheckSameNickname: () => void;
}

const UserEditView = ({
  register,
  errors,

  getValues,
  onSubmit,
  onValid,
  onInValid,

  isCheckedNickname,
  onChangeNickname,
  onCheckSameNickname,
}: UserEditViewProps) => {
  return (
    <GS.CommonContainer
      style={{ height: "100%" }}
      onSubmit={onSubmit(onValid, onInValid)}
    >
      <S.UserEditLayout>
        <EditNickname
          register={register}
          errors={errors}
          isCheckedNickname={isCheckedNickname}
          onChangeNickname={onChangeNickname}
          onCheckSameNickname={onCheckSameNickname}
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
