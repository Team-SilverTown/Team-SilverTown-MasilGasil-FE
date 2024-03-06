import { useMemo } from "react";
import usePostCreateContext from "./context/PostCreateContext";
import { GeoPosition } from "@/types/OriginDataType";
import { useRouter } from "next/navigation";
import { useUI } from "@/components/uiContext/UiContext";

const usePostCreateController = () => {
  const { pageStep, setPageStep } = usePostCreateContext();
  const { setModalView, openModal } = useUI();
  const router = useRouter();
  const center = useMemo<GeoPosition>(() => ({ lat: 37.497, lng: 127.0254 }), []);

  const handleFallback = () => {
    if (pageStep === "POST_CREATE_TEXT_EDIT") {
      setModalView("CONFIRM_VIEW");
      openModal({
        message: "현재 수정하신 내용이 저장되지 않습니다! 뒤로가실건가요?",
        warningMessage: "작성하신 내용 전부 사라집니다.",
        onClickAccept: () => router.back(),
      });

      return;
    }

    setPageStep("POST_CREATE_TEXT_EDIT");
  };
  return {
    pageStep,
    center,

    handleFallback,
  };
};

export default usePostCreateController;
