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
    <a onClick={handleClickAlert}>
      <NotificationOff />
    </a>
    // <Link
    //   href="/notification"
    //   style={{ marginRight: "1.5rem" }}
    // >
    //   {isNotification ? <NotificationActive /> : <NotificationOff />}
    // </Link>
  );
};

export default Notification;
