import { useUI } from "@/components/uiContext/UiContext";
import { useMutation } from "@tanstack/react-query";

import { postImage } from "../api/image/client";
import { IMAGE_UPLOAD_KEY } from "../api/queryKeys";
import checkErrorCode from "../utils/checkErrorCode";

const useImageUpload = () => {
  const { setModalView, openModal } = useUI();
  const mutation = useMutation({
    mutationKey: [IMAGE_UPLOAD_KEY],
    mutationFn: async (file: File | Blob) => await postImage({ file }),
    onError: ({ message }) => {
      setModalView("ANIMATION_ALERT_VIEW");

      openModal({
        message: checkErrorCode({
          errorCode: message,
          defaultMessage: `이미지 업로드과정에 문제가 발생했습니다.`,
        }),
      });
    },
  });

  return mutation;
};

export default useImageUpload;
