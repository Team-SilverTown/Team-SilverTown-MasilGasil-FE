import { IntensityOption } from "@/types/OriginDataType";
import { create } from "zustand";

interface OriginProps {
  userId?: number;
  nickname?: string;
  profileImg?: string;
  sex?: "MALE" | "FEMALE";
  birthDate?: string;
  height?: number;
  weight?: number;
  exerciseIntensity?: IntensityOption;
}

interface UseMeStoreProps extends OriginProps {
  setMe: ({
    userId,
    nickname,
    profileImg,
    sex,
    birthDate,
    height,
    weight,
    exerciseIntensity,
  }: OriginProps) => void;

  initMe: () => void;
}

const useMeStore = create<UseMeStoreProps>((set) => ({
  userId: undefined,
  nickname: undefined,
  profileImg: undefined,
  sex: undefined,
  birthDate: undefined,
  height: undefined,
  weight: undefined,
  exerciseIntensity: undefined,

  setMe: (data) => {
    set(() => ({ ...data }));
  },
  initMe: () => {
    set(() => ({
      userId: undefined,
      nickname: undefined,
      profileImg: undefined,
      sex: undefined,
      birthDate: undefined,
      height: undefined,
      weight: undefined,
      exerciseIntensity: undefined,
    }));
  },
}));

export default useMeStore;