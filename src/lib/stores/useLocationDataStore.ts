import { APIResponse } from "@/app/home/api/fetchNearbyStation";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface LocationType {
  lat: number | null;
  lng: number | null;
  tmX: number | null;
  tmY: number | null;
}

interface UseLocationTimeStoreProps {
  location: LocationType;
  time: Date;
  setLocation: (newLocation: LocationType) => void;
  setTime: (newTime: Date) => void;
}

interface UseWeatherStoreProps {
  weatherData: APIResponse;
  setWeatherData: (newWeatherData: APIResponse) => void;
}

export const useLocationTimeStore = create(
  persist<UseLocationTimeStoreProps>(
    (set) => ({
      location: { lat: null, lng: null, tmX: null, tmY: null },
      time: new Date(),
      setLocation: (newLocation) => set({ location: { ...newLocation } }),
      setTime: (newTime) => set({ time: newTime }),
    }),
    {
      name: "locationTime-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useWeatherStore = create(
  persist<UseWeatherStoreProps>(
    (set) => ({
      weatherData: {
        pm10: null,
        precipitation: null,
        temperature: null,
        weather: null,
      },
      setWeatherData: (newWeatherData) => set({ weatherData: { ...newWeatherData } }),
    }),
    { name: "weather-storage" },
  ),
);
