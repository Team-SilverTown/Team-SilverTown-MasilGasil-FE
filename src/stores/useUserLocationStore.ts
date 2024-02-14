import { GeoJSONPoint } from "@/types/OriginDataType";
import { create } from "zustand";

// 강남역
const DEFAULT_USER_LOCATION: GeoJSONPoint = {
  type: "Point",
  coordinates: [37.498095, 127.02761],
};

interface UseUserLocationStore {
  userLocation: GeoJSONPoint;

  setUserLocation: (param: { lat: number; lng: number }) => void;
}

const useUserLocationStore = create<UseUserLocationStore>((set) => ({
  userLocation: DEFAULT_USER_LOCATION,

  setUserLocation: ({ lat, lng }) =>
    set((prevState) => ({
      userLocation: {
        ...prevState.userLocation,
        coordinates: [lat, lng],
      },
    })),
}));

export default useUserLocationStore;
