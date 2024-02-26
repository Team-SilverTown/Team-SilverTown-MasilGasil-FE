export interface SexOptionProps {
  label: string;
  value: "male" | "female";
}

export const SEX_OPTIONS: SexOptionProps[] = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
];

export const signInValidation = {
  birthDate: {
    required: "나이는 필수 항목입니다.",
    min: {
      value: 14,
      message: "14세 이상이어야 합니다",
    },
    max: {
      value: 100,
      message: "100세 이하여야 합니다",
    },
  },
  height: {
    required: "키는 필수 항목입니다.",
    min: {
      value: 50,
      message: "값이 너무 작습니다.",
    },
    max: {
      value: 500,
      message: "값이 너무 큽니다.",
    },
  },
  weight: {
    required: "체중은 필수 항목입니다.",
    min: {
      value: 10,
      message: "값이 너무 작습니다.",
    },
    max: {
      value: 500,
      message: "값이 너무 큽니다.",
    },
  },
};
