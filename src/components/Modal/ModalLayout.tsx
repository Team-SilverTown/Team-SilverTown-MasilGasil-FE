import { FC, useRef, useEffect, useCallback } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { useUI } from "@components/uiContext/UiContext";

import {
  ModalLayoutHeader,
  ModalLayoutContainer,
  ModalHeaderTitle,
  ModalHeaderButton,
  ModalContantWrapper,
} from "./Modal.styles";
import { Cross } from "../icons";

// import FocusTrap from "@lib/focus-trap";

interface ModalLayoutProps {
  className?: string;
  children?: any;
  modalTitle?: string;
  onHandleClose?: () => void | null;
  // onEnter?: () => void | null;
}

const ModalLayout: FC<ModalLayoutProps> = ({
  className,
  children,
  onHandleClose,
  modalTitle = "",
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { closeModal } = useUI();

  const handleClose = () => {
    onHandleClose && onHandleClose();
    closeModal();
  };

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return handleClose();
      }
    },
    [handleClose, closeModal],
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <ModalLayoutContainer
      ref={ref}
      role="dialog"
      className={className}
    >
      <ModalLayoutHeader>
        <ModalHeaderTitle>{modalTitle}</ModalHeaderTitle>
      </ModalLayoutHeader>
      <ModalHeaderButton
        onClick={() => handleClose()}
        aria-label="Close panel"
      >
        <Cross className="h-6 w-6" />
      </ModalHeaderButton>
      <ModalContantWrapper>{children}</ModalContantWrapper>
    </ModalLayoutContainer>
  );
};

export default ModalLayout;
