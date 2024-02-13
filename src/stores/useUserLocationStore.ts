import { Position } from "@/app/log/create/LogCreate.types";
import { create } from "zustand";

// 강남역
const DEFAULT_USER_LOCATION = {
  lat: 37.498095,
  lng: 127.02761,
};

interface UseUserLocation {
  userLocation: Position;

  setUserLocation: (param: Position) => void;
}

const useUserLocation = create<UseUserLocation>((set) => ({
  userLocation: DEFAULT_USER_LOCATION,

  setUserLocation: ({ lat, lng }) => set(() => ({ userLocation: { lat, lng } })),
}));

export default useUserLocation;
