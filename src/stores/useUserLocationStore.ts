import { GeoPosition } from "@/types/OriginDataType";
import { create } from "zustand";

// 강남역
const DEFAULT_USER_LOCATION: GeoPosition = {
  lat: 37.498095,
  lng: 127.02761,
};

interface UseUserLocationStore {
  userLocation: GeoPosition;
  setUserLocation: (param: { lat: number; lng: number }) => void;
}

const useUserLocationStore = create<UseUserLocationStore>((set) => ({
  userLocation: DEFAULT_USER_LOCATION,
  setUserLocation: ({ lat, lng }) => set(() => ({ userLocation: { lat, lng } })),
}));

export default useUserLocationStore;
