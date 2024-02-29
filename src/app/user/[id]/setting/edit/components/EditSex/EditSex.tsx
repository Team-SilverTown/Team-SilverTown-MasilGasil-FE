import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import * as GS from "../../UserEdit.styles";
import * as S from "./EditSex.styles";
import { UserEditData } from "../../UserEdit.types";
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

interface createInputRadioProps {
  register: UseFormRegisterReturn;
  value: string | number;
  text: string;
  isSelected: boolean;
  key?: string | number;
}
const InputRadio = ({ value, text, register, isSelected }: createInputRadioProps) => {
  return (
    <>
      <input
        type="radio"
        id={`${text}_${value}`}
        value={value}
        style={{ display: "none" }}
        {...register}
      />

      <S.InputRadioLabel
        htmlFor={`${text}_${value}`}
        $isSelected={isSelected}
      >
        {text}
      </S.InputRadioLabel>
    </>
  );
};
