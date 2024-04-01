import { GeoPosition } from "@/types/OriginDataType";
import { UserAddressType } from "@/types/OriginDataType/Location";

import { create } from "zustand";

const DEFAULT_USER_LOCATION: GeoPosition = {
  lat: 0,
  lng: 0,
};

interface UseUserLocationStore {
  userLocation: GeoPosition;
  userAddress: UserAddressType;
  setUserLocation: (param: { lat: number; lng: number }) => void;
  setUserAddress: (location: UserAddressType) => void;
}

const useUserLocationStore = create<UseUserLocationStore>((set) => ({
  userLocation: DEFAULT_USER_LOCATION,
  userAddress: {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
  },
  setUserLocation: ({ lat, lng }) => set(() => ({ userLocation: { lat, lng } })),
  setUserAddress: (location) => set(() => ({ userAddress: location })),
}));

export default useUserLocationStore;
