"use client";

import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

import React, { useMemo } from "react";

import { MODAL_VIEWS } from "@/lib/stores/ui/types/modalType";
import { WINDOW_VIEWS } from "@/lib/stores/ui/types/windowType";
import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";
import useModalStore from "@/lib/stores/ui/useModalStore";
import useWindowStore from "@/lib/stores/ui/useWindowStore";
import { Modal } from "@components/Modal";
import Window from "@components/Window";
import {
  AccessLoginModal,
  AnimationAlertModal,
  ConfirmModal,
  DoneModal,
  MateCreateMapModal,
  MateParticipantModal,
  MateRequestModal,
  PinDetailModal,
  PinEditModal,
  ProfileEditModal,
  TestModal,
} from "@components/modalViews";
import { useLocalStorage } from "@lib/hooks/useLocalStorage";

import DeployAlertModal from "../modalViews/DeployAlertModal/DeployAlertModal";
import LogRecordDoneModal from "../modalViews/LogRecordDoneModal/LogRecordDoneModal";
import MateLocationMapModal from "../modalViews/MateMapModal/MateLocationMapModal/MapLocationMapModal";

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
    // modal
    displayModal,
    modalView,
    modalProps,
    openModal: (props?: any) => openModal(props),
    closeModal: () => closeModal(),
    setModalView: (view: MODAL_VIEWS) => setModalView(view),
    // loadingSpinner
    showLoadingSpinner,
    closeLoadingSpinner,
    // window
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
      {modalView === "MATE_PARTICIPANT_USER_VIEW" && <MateParticipantModal props={props} />}
      {modalView === "MATE_REQUEST_VIEW" && <MateRequestModal props={props} />}
      {modalView === "ACCESS_LOGIN_VIEW" && <AccessLoginModal />}
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

// Policy Window View //
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
// ------------------------------------------------------------------------------ //

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
