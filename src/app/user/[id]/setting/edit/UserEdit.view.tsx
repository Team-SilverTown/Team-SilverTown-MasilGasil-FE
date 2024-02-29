import * as GS from "@/styles/GlobalStyle";
import * as S from "./UserEdit.styles";

import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { UserEditData } from "./UserEdit.types";

import { EditSex, EditNickname, EditAge, EditBodyInfo } from "./components";

interface UserEditViewProps {
  register: UseFormRegister<UserEditData>;
  errors: FieldErrors<UserEditData>;

  onSubmit: UseFormHandleSubmit<UserEditData>;
  onValid: (data: UserEditData) => void;
  onInValid: (error: FieldErrors) => void;

  selectedSex: string;
  isCheckedNickname: boolean;
  onCheckSameNickname: () => void;
}

const UserEditView = ({
  register,
  errors,

  onSubmit,
  onValid,
  onInValid,

  selectedSex,
  isCheckedNickname,
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
          onCheckSameNickname={onCheckSameNickname}
        />

        <EditSex
          register={register}
          selectedSex={selectedSex}
        />

        <EditAge
          register={register}
          errors={errors}
        />

        <EditBodyInfo
          register={register}
          errors={errors}
        />

        <div>강도</div>

        <button>테스트용 제출 버튼</button>
      </S.UserEditLayout>
    </GS.CommonContainer>
  );
};

export default UserEditView;
