import {
  ModalContentWrapper,
  ModalHeaderButton,
  ModalHeaderTitle,
  ModalLayoutContainer,
  ModalLayoutHeader,
} from "./Modal.styles";

import { CSSProperties, FC, useCallback, useEffect, useRef } from "react";

import { useUI } from "@components/uiContext/UiContext";

import { Cross } from "../icons";

import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

// import FocusTrap from "@lib/focus-trap";

interface ModalLayoutProps {
  className?: string;
  children?: any;
  modalTitle?: string;
  onHandleClose?: () => void | null;
  style?: CSSProperties;
  // onEnter?: () => void | null;
}

const ModalLayout: FC<ModalLayoutProps> = ({
  className,
  children,
  onHandleClose,
  modalTitle = "",
  style,
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
      style={style}
    >
      <ModalLayoutHeader>
        <ModalHeaderTitle>{modalTitle}</ModalHeaderTitle>
      </ModalLayoutHeader>
      <ModalHeaderButton
        onClick={() => handleClose()}
        aria-label="Close panel"
      >
        <Cross
          width="2.5rem"
          height="2.5rem"
        />
      </ModalHeaderButton>
      <ModalContentWrapper>{children}</ModalContentWrapper>
    </ModalLayoutContainer>
  );
};

export default ModalLayout;
