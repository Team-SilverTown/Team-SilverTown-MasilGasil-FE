"use client";

import { useUI } from "@/components/uiContext/UiContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const error = () => {
  const { openModal, setModalView } = useUI();
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
    setModalView("ANIMATION_ALERT_VIEW");
    openModal({ message: "해당 메이트 페이지는 없는 페이지입니다." });
  }, []);
  return <></>;
};

export default error;
