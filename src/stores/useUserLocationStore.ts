import { Position } from "@/types/Request/Masils";
import { create } from "zustand";

// 강남역
const DEFAULT_USER_LOCATION = {
  lat: 37.498095,
  lng: 127.02761,
};

interface UseUserLocationStore {
  userLocation: Position;

  setUserLocation: (param: Position) => void;
}

const useUserLocationStore = create<UseUserLocationStore>((set) => ({
  userLocation: DEFAULT_USER_LOCATION,

  setUserLocation: ({ lat, lng }) => set(() => ({ userLocation: { lat, lng } })),
}));

export default useUserLocationStore;
