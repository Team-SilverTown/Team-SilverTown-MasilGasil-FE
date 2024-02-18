"use client";

import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { useLocalStorage } from "@lib/hooks/useLocalStorage";
import useModalStore from "@/stores/ui/useModalStore";
import { MODAL_VIEWS } from "@/stores/ui/types/modalType";
import { darkTheme, lightTheme } from "@/styles/theme";
import { Modal } from "@components/Modal";
import { TestModal } from "@components/modalViews";

import LogInitConfirmModal from "../modalViews/LogInitConfirmModal/LogInitConfirmModal";

export const useUI = () => {
  const { displayModal, modalView, modalProps, setModalView, openModal, closeModal } =
    useModalStore();

  const context = {
    // modal
    displayModal,
    modalView,
    modalProps,
    openModal: (props?: any) => openModal(props),
    closeModal: () => closeModal(),
    setModalView: (view: MODAL_VIEWS) => setModalView(view),
  };

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
      {modalView === "LOG_INIT_CONFIRM" && <LogInitConfirmModal props={props} />}
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
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>{children}</ThemeProvider>
  );
};
