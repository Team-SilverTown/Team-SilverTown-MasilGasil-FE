import * as GS from "../../UserEdit.styles";
import * as S from "./EditIntensity.styles";

const EditIntensity = () => {
  const exerciseIntensity = [
    { label: "좌식", value: "SUPER_LOW" },
    { label: "가벼운 활동(가벼운 운동/스포츠 3-5일/주)", value: "LOW" },
    { label: "적당히 활동적(중간 정도의 운동/스포츠 3-5일/주)", value: "MIDDLE" },
    { label: "활동적(일주일에 6-7일 격렬한 운동/스포츠)", value: "HIGH" },
    { label: "매우 활독적인 경우 (매우 힘든 운동/스포츠 및 육체 노동)", value: "SUPER_HIGH" },
  ];

  return (
    <GS.UserEditSectionContainer>
      <S.IntensityTitle>평소 운동 강도</S.IntensityTitle>
      <S.IntensityDescription>
        기초 대사량 계산에 필요한 활동 계수를 설정해요.
      </S.IntensityDescription>
    </GS.UserEditSectionContainer>
  );
};

export default EditIntensity;
