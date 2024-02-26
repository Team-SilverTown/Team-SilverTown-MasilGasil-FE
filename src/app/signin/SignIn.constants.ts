export interface SexOptionProps {
  label: string;
  value: "male" | "female";
}

export const SEX_OPTIONS: SexOptionProps[] = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
];
