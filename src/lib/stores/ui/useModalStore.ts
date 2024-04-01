import { MODAL_VIEWS } from "./types/modalType";

import { create } from "zustand";

interface UseModalStoreProps {
  displayModal: boolean;
  modalView: MODAL_VIEWS;
  modalProps: any | null;

  openModal: (props?: any) => void;
  closeModal: () => void;
  setModalView: (view: MODAL_VIEWS) => void;
}

const useModalStore = create<UseModalStoreProps>((set) => ({
  // initial state
  displayModal: false,
  modalView: "INIT_VIEW",
  modalProps: null,

  // action reducers
  openModal: (props) => {
    set((state) => ({
      ...state,
      displayModal: true,
      modalProps: props,
    }));
  },
  closeModal: () => {
    set((state) => ({
      ...state,
      displayModal: false,
      modalProps: null,
    }));
  },
  setModalView: (view) => {
    set((state) => ({
      ...state,
      modalView: view,
    }));
  },
}));

export default useModalStore;
