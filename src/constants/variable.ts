import { SexOption } from "@/types/OriginDataType/SexOption";

export const INTENSITY_OPTIONS = [
  { label: "좌식", value: "SUPER_LOW" },
  { label: "가벼운 활동(가벼운 운동/스포츠 3-5일/주)", value: "LOW" },
  { label: "적당히 활동적(중간 정도의 운동/스포츠 3-5일/주)", value: "MIDDLE" },
  { label: "활동적(일주일에 6-7일 격렬한 운동/스포츠)", value: "HIGH" },
  { label: "매우 활독적인 경우 (매우 힘든 운동/스포츠 및 육체 노동)", value: "SUPER_HIGH" },
];

export const SEX_OPTIONS: SexOption[] = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
];
