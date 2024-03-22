"use client";
import { useUI } from "@/components/uiContext/UiContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const error = () => {
  const { openModal, setModalView } = useUI();
  const router = useRouter();

  useEffect(() => {
    setModalView("ANIMATION_ALERT_VIEW");
    openModal({ message: "메이트 모집하기를 시작할 수 없습니다." });
    router.push("/home");
  }, []);

  return <></>;
};
export default error;
