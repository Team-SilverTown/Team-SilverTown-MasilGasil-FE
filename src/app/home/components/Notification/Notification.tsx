import Link from "next/link";
import { NotificationActive, NotificationOff } from "@/components/icons";

interface NotificationProps {
  isNotification: boolean | null;
}

const Notification = ({ isNotification }: NotificationProps) => {
  return (
    <Link
      href="/notification"
      style={{ marginRight: "1.5rem" }}
    >
      {isNotification ? <NotificationActive /> : <NotificationOff />}
    </Link>
  );
};

export default Notification;
