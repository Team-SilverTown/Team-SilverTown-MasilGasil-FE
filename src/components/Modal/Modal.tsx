"use client";

import { ModalBackground, ModalContainer } from "./Modal.styles";

import { FC, ReactNode, useCallback, useEffect, useRef } from "react";

import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose],
  );

  const backgroundClickHandler = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    onClose();
  };

  useEffect(() => {
    const modalBackground = ref.current;

    if (modalBackground) {
      disableBodyScroll(modalBackground, { reserveScrollBarGap: true });
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  const handleEvent = useCallback(() => {
    onClose();
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => {
      window.removeEventListener("popstate", handleEvent);
    };
  }, []);

  return (
    <ModalContainer>
      <ModalBackground
        ref={ref}
        onClick={backgroundClickHandler}
      />
      {children}
    </ModalContainer>
  );
};

export default Modal;
