import { useMemo, useState } from "react";
import usePostCreateContext from "./context/PostCreateContext";
import { GeoPosition } from "@/types/OriginDataType";
import { useRouter } from "next/navigation";
import { useUI } from "@/components/uiContext/UiContext";
import useTheme from "@/lib/hooks/useTheme";

const usePostCreateController = () => {
  const [isOpenBottom, setIsOpenBottom] = useState(false);
  const { pageStep, setPageStep, postData, handleClickPin } = usePostCreateContext();
  const { setModalView, openModal } = useUI();
  const router = useRouter();
  const theme = useTheme();

  // 추후 중앙값 계산하여 추가
  const center = useMemo<GeoPosition>(() => postData.path[0], [postData.path]);

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

    postData,
    pageStep,
    center,
    theme,

    handleFallback,
    handleClickPin,
  };
};

export default usePostCreateController;
