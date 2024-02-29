import { UseFormRegister } from "react-hook-form";
import * as GS from "../../UserEdit.styles";
import * as S from "./EditSex.styles";
import { UserEditData } from "../../UserEdit.types";
import { InputRadio } from "@/components";
interface EditAgeProps {
  register: UseFormRegister<UserEditData>;
  selectedSex: string;
}
const EditSex = ({ register, selectedSex }: EditAgeProps) => {
  const options = [
    { text: "남성", value: "male" },
    { text: "여성", value: "female" },
  ];

  return (
    <S.EditSexContainer>
      <GS.UserEditTitle>성별</GS.UserEditTitle>

      <S.EditSexActions>
        {options.map(({ text, value }) => (
          <InputRadio
            key={`${text}_${value}`}
            value={value}
            text={text}
            isSelected={selectedSex === value}
            register={register("sex", { required: "성별의 입력은 필수" })}
          />
        ))}
      </S.EditSexActions>
    </S.EditSexContainer>
  );
};

export default EditSex;
