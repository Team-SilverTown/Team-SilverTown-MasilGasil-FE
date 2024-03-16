"use client";

import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { useLocalStorage } from "@lib/hooks/useLocalStorage";
import useModalStore from "@/stores/ui/useModalStore";
import { Modal } from "@components/Modal";
import Window from "@components/Window";
import {
  PinEditModal,
  TestModal,
  ProfileEditModal,
  MateCreateMapModal,
  ConfirmModal,
  AnimationAlertModal,
  PinDetailModal,
  DoneModal,
} from "@components/modalViews";
import { darkTheme, lightTheme } from "@/styles/theme";
import { MODAL_VIEWS } from "@/stores/ui/types/modalType";
import LogRecordDoneModal from "../modalViews/LogRecordDoneModal/LogRecordDoneModal";
import useLoadingSpinnerStore from "@/stores/ui/useLoadingSpinnerStore";
import useWindowStore from "@/stores/ui/useWindowStore";
import { WINDOW_VIEWS } from "@/stores/ui/types/windowType";

import MateLocationMapModal from "../modalViews/MateMapModal/MateLocationMapModal/MapLocationMapModal";
import DeployAlertModal from "../modalViews/DeployAlertModal/DeployAlertModal";

export const useUI = () => {
  const { showLoadingSpinner, closeLoadingSpinner } = useLoadingSpinnerStore();
  const { displayModal, modalView, modalProps, setModalView, openModal, closeModal } =
    useModalStore();
  const {
    displayWindow,
    windowView,
    setWindowView,
    openWindow,
    closeWindow,
    setWindowURL,
    windowURL,
  } = useWindowStore();

  const context = {
    displayModal,
    modalView,
    modalProps,
    openModal: (props?: any) => openModal(props),
    closeModal: () => closeModal(),
    setModalView: (view: MODAL_VIEWS) => setModalView(view),

    showLoadingSpinner,
    closeLoadingSpinner,

    displayWindow,
    windowView,
    windowURL,
    openWindow: () => openWindow(),
    closeWindow: () => closeWindow(),
    setWindowView: (view: WINDOW_VIEWS) => setWindowView(view),
    setWindowURL: (url: string) => setWindowURL(url),
  };

  return context;
};

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
      {modalView === "CONFIRM_VIEW" && <ConfirmModal props={props} />}
      {modalView === "PIN_EDIT_VIEW" && <PinEditModal props={props} />}
      {modalView === "PIN_DETAIL_MODAL_VIEW" && <PinDetailModal props={props} />}
      {modalView === "LOG_RECORD_DONE_VIEW" && <LogRecordDoneModal props={props} />}
      {modalView === "PROFILE_EDIT_VIEW" && <ProfileEditModal props={props} />}
      {modalView === "MATE_CREATE_MAP_VIEW" && <MateCreateMapModal props={props} />}
      {modalView === "MATE_LOCATION_MAP_VIEW" && <MateLocationMapModal props={props} />}
      {modalView === "ANIMATION_ALERT_VIEW" && <AnimationAlertModal props={props} />}
      {modalView === "DEPLOY_ALERT_VIEW" && <DeployAlertModal />}
      {modalView === "DONE_VIEW" && <DoneModal props={props} />}
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

const WindowView = ({
  windowView,
  closeWindow,
  windowURL,
}: {
  windowView: string;
  closeWindow(): any;
  windowURL: string;
}) => {
  const width = Math.min(screen.width, 600);
  const height = screen.height;

  return (
    <>
      {windowView.includes("POLICY") && (
        <Window
          windowStyle={`width=${width},height=${height},left=0,top=0,resizable=no`}
          onClose={closeWindow}
          url={windowURL}
        />
      )}
    </>
  );
};

export const WindowUI = () => {
  const { displayWindow, closeWindow, windowView, windowURL } = useUI();
  return displayWindow ? (
    <WindowView
      windowView={windowView}
      closeWindow={closeWindow}
      windowURL={windowURL}
    />
  ) : null;
};

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
