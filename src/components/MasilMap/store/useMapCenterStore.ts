import { create } from "zustand";

interface UseMapCenterStore {
  isOutCenter: boolean;

  setIsOutCenter: (newState: boolean) => void;
}

const useMapCenterStore = create<UseMapCenterStore>((set) => ({
  isOutCenter: false,

  setIsOutCenter: (newState) => set(() => ({ isOutCenter: newState })),
}));

export default useMapCenterStore;
