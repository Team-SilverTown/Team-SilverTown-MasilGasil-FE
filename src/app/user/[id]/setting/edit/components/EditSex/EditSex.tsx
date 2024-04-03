import * as GS from "../../UserEdit.styles";
import * as S from "./EditSex.styles";

import { UseFormRegister } from "react-hook-form";

import { InputRadio } from "@/components";
import { SEX_OPTIONS } from "@/lib/constants/variable";
import { MeResponse } from "@/types/Response";

interface EditAgeProps {
  register: UseFormRegister<MeResponse>;
  selectedSex: string | undefined;
}

const EditSex = ({ register, selectedSex }: EditAgeProps) => {
  return (
    <GS.UserEditSectionContainer>
      <GS.UserEditTitle>성별</GS.UserEditTitle>

      <S.EditSexActions>
        {SEX_OPTIONS.map(({ label, value }) => (
          <InputRadio
            key={`${label}_${value}`}
            value={value}
            text={label}
            isSelected={selectedSex === value}
            register={register("sex")}
          />
        ))}
      </S.EditSexActions>
    </GS.UserEditSectionContainer>
  );
};

export default EditSex;
