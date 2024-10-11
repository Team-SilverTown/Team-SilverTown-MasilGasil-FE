import { APIResponse } from "@/app/home/api/fetchNearbyStation";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface LocationType {
  lat: number | null;
  lng: number | null;
  tmX: number | null;
  tmY: number | null;
}

interface UseGeoLocationStoreProps {
  location: LocationType;
  setLocation: (newLocation: LocationType) => void;
}

interface UseWeatherStoreProps {
  weatherData: APIResponse;
  setWeatherData: (newWeatherData: APIResponse) => void;
}

interface UseVisitCheckTimeStoreProps {
  time: Date;
  setTime: (newTime: Date) => void;
}

export const useGeoLocationStore = create(
  persist<UseGeoLocationStoreProps>(
    (set) => ({
      location: { lat: null, lng: null, tmX: null, tmY: null },
      setLocation: (newLocation) => set({ location: { ...newLocation } }),
    }),
    {
      name: "location-storage",
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

export const useVisitCheckTimeStore = create(
  persist<UseVisitCheckTimeStoreProps>(
    (set) => ({
      time: new Date(),
      setTime: (newTime) => set({ time: newTime }),
    }),
    {
      name: "time-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
