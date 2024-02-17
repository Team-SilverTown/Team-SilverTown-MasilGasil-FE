"use client";

import React, { useCallback, useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { useLocalStorage } from "@lib/hooks/useLocalStorage";
import { Modal } from "@components/Modal";
import { TestModal } from "@components/modalViews";
import { MODAL_ACTION, MODAL_VIEWS } from "./types/modalType";
import { darkTheme, lightTheme } from "@/styles/theme";
import ConfirmModal from "../modalViews/ConfirmModal/ConfirmModal";

export interface State {
  displayModal: boolean;
  modalView: MODAL_VIEWS;
  modalProps: any | null;
}

const initialState: State = {
  displayModal: false,
  modalView: "INIT_VIEW",
  modalProps: null,
};

type Action = MODAL_ACTION & {};

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        modalProps: action.props,
        displayModal: true,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        modalProps: null,
        displayModal: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalProps: null,
        modalView: action.view,
      };
    }
  }
}

export const UIProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openModal = useCallback(
    (props?: any) => dispatch({ type: "OPEN_MODAL", props }),
    [dispatch],
  );

  const closeModal = useCallback(() => dispatch({ type: "CLOSE_MODAL" }), [dispatch]);

  const setModalView = useCallback(
    (view: MODAL_VIEWS) => dispatch({ type: "SET_MODAL_VIEW", view }),
    [dispatch],
  );

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
    }),
    [state],
  );

  return (
    <UIContext.Provider
      value={value}
      {...props}
    />
  );
};

interface IUIContext extends State {
  openModal: any;
  closeModal: any;
  setModalView: (view: MODAL_VIEWS) => void;
}

export const useUI = () => {
  const context: IUIContext = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

// Modal ================================================================= //
const ModalView = ({
  modalView,
  closeModal,
  props,
}: {
  modalView: MODAL_VIEWS;
  closeModal: () => void;
  props?: any;
}) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === "INIT_VIEW" && <TestModal />}
      {modalView === "CONFIRM" && <ConfirmModal props={props} />}
    </Modal>
  );
};

export const ModalUI: React.FC<{ [key: string]: any }> = (...rest) => {
  const { displayModal, closeModal, modalView, modalProps } = useUI();
  return displayModal ? (
    <ModalView
      modalView={modalView}
      closeModal={closeModal}
      props={modalProps}
      {...rest}
    />
  ) : null;
};
// ================================================================= Modal //

export const ManagedUIContext = ({ children }: { children: any }) => {
  const [localTheme] = useLocalStorage("theme");

  const themeMode = useMemo((): string => {
    if (localTheme) return localTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, [localTheme]);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  );
};
