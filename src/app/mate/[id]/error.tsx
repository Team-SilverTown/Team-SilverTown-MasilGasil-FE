"use client";

import { useEffect } from "react";

import { useUI } from "@/components/uiContext/UiContext";

import { useRouter } from "next/navigation";

const error = () => {
  const { openModal, setModalView } = useUI();
  const router = useRouter();

  useEffect(() => {
    setModalView("ANIMATION_ALERT_VIEW");
    openModal({ message: "메이트 페이지를 불러올 수 없습니다.<br>잠시 후 다시 시도해주세요!" });
    router.replace("/home");
  }, []);
  return <></>;
};

export default error;
