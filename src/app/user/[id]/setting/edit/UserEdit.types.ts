export interface UserEditData {
  nickname: string;
  sex: "male" | "female";
  age: number;
  height: number;
  weight: number;
  intensity: "SUPER_LOW" | "LOW" | "MIDDLE" | "HIGH" | "SUPER_HIGH";
}
