"use client";

import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { useLocalStorage } from "@lib/hooks/useLocalStorage";
import useModalStore from "@/stores/ui/useModalStore";
import { Modal } from "@components/Modal";
import {
  PinEditModal,
  LogRecordAlertModal,
  LogRecordConfirmModal,
  TestModal,
} from "@components/modalViews";
import { darkTheme, lightTheme } from "@/styles/theme";
import { MODAL_VIEWS } from "@/stores/ui/types/modalType";
import useLoadingSpinnerStore from "@/stores/ui/useLoadingSpinnerStore";

export const useUI = () => {
  const { showLoadingSpinner, closeLoadingSpinner } = useLoadingSpinnerStore();
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
    showLoadingSpinner,
    closeLoadingSpinner,
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
      {modalView === "LOG_RECORD_CONFIRM_VIEW" && <LogRecordConfirmModal props={props} />}
      {modalView === "LOG_RECORD_ALERT_VIEW" && <LogRecordAlertModal props={props} />}
      {modalView === "PIN_EDIT" && <PinEditModal props={props} />}
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
