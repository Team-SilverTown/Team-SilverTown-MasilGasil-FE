"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useUI } from "@/components/uiContext/UiContext";
import { postMasil } from "@/lib/api/masil/client";
import { MASIL_KEY } from "@/lib/api/queryKeys";
import useImageUpload from "@/lib/hooks/useImageUpload";
import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";
import useMeStore from "@/lib/stores/useMeStore";
import useUserLocationStore from "@/lib/stores/useUserLocationStore";
import { calculateWalkingCalories } from "@/lib/utils";
import calculatePathCenter from "@/lib/utils/calculatePathCenter";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { drawPath } from "@/lib/utils/drawPath";
import { MasilRecordRequest } from "@/types/Request";
import { useMutation } from "@tanstack/react-query";

import useLogRecordContext from "../../context/LogRecordContext";

import { useRouter } from "next/navigation";

const useLogRecordEditController = () => {
  const { setModalView, openModal, closeModal } = useUI();
  const { setUserLocation } = useUserLocationStore();
  const { logData, handleRemovePin, handleClickPin } = useLogRecordContext();
  const { showLoadingSpinner, closeLoadingSpinner } = useLoadingSpinnerStore();

  const { register, getValues } = useForm<{ logMemo: string }>({
    defaultValues: { logMemo: logData.content },
  });
  const imageMutation = useImageUpload();
  const router = useRouter();
  const { getMe } = useMeStore();

  const logUploadMutation = useMutation({
    mutationKey: [MASIL_KEY.RECORD_SUBMIT],
    mutationFn: async (data: MasilRecordRequest) => await postMasil({ data }),
  });

  useEffect(() => {
    const { lat, lng } = calculatePathCenter(logData.path);

    setUserLocation({ lat, lng });
  }, []);
  const handleSubmit = () => {
    setModalView("CONFIRM_VIEW");
    openModal({
      message: "현재의 기록을 등록하시겠어요?",
      onClickAccept: () => {
        closeModal();
        showLoadingSpinner();
        updateLog();
      },
    });
  };

  /**
   * @func updateLog
   *
   * @brief 폼을 통해 입력받은 Memo를 logData의 content에 저장한 후, 서버에 전송합니다.
   *
   * 이후, 서버에 전송 성공시 Done Modal이 제공되어지고, 공유를 선택시 시작지점과 성성된 log id 를 post 생성 페이지에 전달합니다.
   */
  const updateLog = () => {
    if (logData.path.length < 4) {
      setModalView("ANIMATION_ALERT_VIEW");
      closeLoadingSpinner();

      openModal({
        message: "산책하신 경로가 너무 적습니다.<br>100m 이상부터 산책을 기록하실 수 있습니다.",
      });
      return;
    }
    const newCalories = calculateWalkingCalories({
      userInfo: getMe(),
      distance: logData.distance,
    });

    const newData: MasilRecordRequest = {
      ...logData,
      content: getValues("logMemo"),
      calories: newCalories.calories ? newCalories.calories : 0,
    };

    if (!newData.content) {
      const nowDate = new Date();
      const month = (nowDate.getMonth() + 1).toString().padStart(2, "0");
      const date = nowDate.getDate().toString().padStart(2, "0");

      newData.content = `${nowDate.getFullYear()}-${month}-${date} 산책기록`;
    }

    const pathCanvas = drawPath(newData.path);

    pathCanvas?.canvas.toBlob((file) => {
      if (!file) {
        return;
      }

      imageMutation.mutate(file, {
        onSuccess: ({ imageUrl }) => {
          newData["thumbnailUrl"] = imageUrl;

          logUploadMutation.mutate(newData, {
            onSuccess: (res) => {
              const { id } = res;
              router.push(`/log/${id}`);
              closeLoadingSpinner();

              setModalView("LOG_RECORD_DONE_VIEW");
              openModal({
                onClickUploadPost: () => {
                  router.push(`/post/create?logId=${id}`);
                  closeModal();
                },
                onClickCancel: () => {
                  closeModal();
                },
                logData,
              });
            },

            onError: ({ message }) => {
              setModalView("ANIMATION_ALERT_VIEW");
              closeLoadingSpinner();

              openModal({
                message: checkErrorCode({
                  errorCode: message,
                  defaultMessage: `산책로 저장에 오류가 발생하였습니다.<br>잠시 후 다시 시도해주세요.`,
                }),
              });
            },
          });
        },
      });
    }, "image/webp");
  };

  return {
    logData,

    register,
    handleClickPin,
    handleRemovePin,
    handleSubmit,
  };
};

export default useLogRecordEditController;
