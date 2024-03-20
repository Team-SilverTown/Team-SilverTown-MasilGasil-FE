"use client";

import Link from "next/link";
import { NotificationActive, NotificationOff } from "@/components/icons";
import { useUI } from "@/components/uiContext/UiContext";

interface NotificationProps {
  isNotification: boolean | null;
}

const Notification = ({ isNotification }: NotificationProps) => {
  const { openModal, setModalView } = useUI();

  const handleClickAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return (
    <a
      onClick={handleClickAlert}
      style={{ marginRight: "1.5rem" }}
    >
      <NotificationOff />
    </a>
  );
};

export default Notification;
