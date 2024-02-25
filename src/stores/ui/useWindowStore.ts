import { create } from "zustand";

import { WINDOW_VIEWS } from "./types/windowType";

interface UseWindowStoreProps {
  displayWindow: boolean;
  windowView: WINDOW_VIEWS;

  openWindow: () => void;
  closeWindow: () => void;
  setWindowView: (view: WINDOW_VIEWS) => void;
}

const useWindowStore = create<UseWindowStoreProps>((set) => ({
  displayWindow: false,
  windowView: "INIT_VIEW",

  openWindow: () => {
    set((state) => ({
      ...state,
      displayWindow: true,
    }));
  },

  closeWindow: () => {
    set((state) => ({
      ...state,
      displayWindow: false,
    }));
  },

  setWindowView: (view) => {
    set((state) => ({
      ...state,
      windowView: view,
    }));
  },
}));

export default useWindowStore;
