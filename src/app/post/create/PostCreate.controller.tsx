import { useState } from "react";
import usePostCreateContext from "./context/PostCreateContext";
import { useRouter } from "next/navigation";
import { useUI } from "@/components/uiContext/UiContext";
import useTheme from "@/lib/hooks/useTheme";

const usePostCreateController = () => {
  const [isOpenBottom, setIsOpenBottom] = useState(false);
  const {
    mapCenter,
    pageStep,
    setPageStep,
    postData,
    currentPinIndex,
    handleClickPin,
    handleClickCenterButton,
  } = usePostCreateContext();
  const { setModalView, openModal } = useUI();
  const router = useRouter();
  const theme = useTheme();

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

  const handleToggleBottomSheet = () => {
    setIsOpenBottom((openState) => !openState);
  };

  return {
    isOpenBottom,
    handleToggleBottomSheet,

    mapCenter,
    postData,
    pageStep,
    currentPinIndex,
    theme,

    handleFallback,
    handleClickPin,
    handleClickCenterButton,
  };
};

export default usePostCreateController;
