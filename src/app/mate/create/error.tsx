"use client";

import { useUI } from "@/components/uiContext/UiContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const error = () => {
  const { openModal, setModalView } = useUI();
  const router = useRouter();

  useEffect(() => {
    setModalView("ANIMATION_ALERT_VIEW");
    openModal({ message: "생성불가" });
    router.push("/home");
  }, []);

  return <></>;
};

export default error;
