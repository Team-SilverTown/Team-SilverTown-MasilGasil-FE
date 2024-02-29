export type IntensityType = "SUPER_LOW" | "LOW" | "MIDDLE" | "HIGH" | "SUPER_HIGH" | "";

export interface UserEditData {
  nickname: string;
  sex: "male" | "female";
  age: number;
  height: number;
  weight: number;
  intensity: IntensityType;
}
