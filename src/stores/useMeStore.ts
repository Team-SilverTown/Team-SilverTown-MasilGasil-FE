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
  isPublic?: boolean;
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
  getMe: () => OriginProps;
  initMe: () => void;
}

const useMeStore = create<UseMeStoreProps>((set, get) => ({
  userId: undefined,
  nickname: undefined,
  profileImg: undefined,
  sex: undefined,
  birthDate: undefined,
  height: undefined,
  weight: undefined,
  exerciseIntensity: undefined,
  isPublic: undefined,

  setMe: (data) => {
    set(() => ({ ...data }));
  },
  getMe: () => {
    const {
      userId,
      nickname,
      profileImg,
      sex,
      birthDate,
      height,
      weight,
      exerciseIntensity,
      isPublic,
    } = get();
    return {
      userId,
      nickname,
      profileImg,
      sex,
      birthDate,
      height,
      weight,
      exerciseIntensity,
      isPublic,
    };
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
      isPublic: undefined,
    }));
  },
}));

export default useMeStore;
