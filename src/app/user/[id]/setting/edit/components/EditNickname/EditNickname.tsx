import { UseFormRegister } from "react-hook-form";
import { UserEditData } from "../../UserEdit.types";
import { Input } from "@/components";

interface EditNicknameProps {
  register: UseFormRegister<UserEditData>;

  onChangeNickname: () => void;
}

const EditNickname = ({ register, onChangeNickname }: EditNicknameProps) => {
  return (
    <Input
      register={register("nickname", {
        required: "변경하실 닉네임을 입력해주세요.",
        minLength: { message: "2글자 이상을 입력해 주세요.", value: 2 },
        maxLength: { message: " 10글자 이하로 입력해 주세요.", value: 10 },
      })}
      type="text"
      placeholder="수정하실 닉네임을 입력해주세요!"
      onChange={onChangeNickname}
    />
  );
};

export default EditNickname;
