import { create } from "zustand";

interface useLoadingSpinnerStoreProps {
  isShow: boolean;

  showLoadingSpinner: () => void;
  closeLoadingSpinner: () => void;
}

const useLoadingSpinnerStore = create<useLoadingSpinnerStoreProps>((set) => ({
  isShow: false,

  showLoadingSpinner: () => set(() => ({ isShow: true })),
  closeLoadingSpinner: () => set(() => ({ isShow: false })),
}));

export default useLoadingSpinnerStore;
