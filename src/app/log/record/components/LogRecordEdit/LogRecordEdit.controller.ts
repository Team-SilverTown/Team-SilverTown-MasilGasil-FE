"use client";

import { useEffect } from "react";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useUI } from "@/components/uiContext/UiContext";
import useLogRecordContext from "../../context/LogRecordContext";
import { useMutation } from "@tanstack/react-query";
import { MASIL_KEY } from "@/lib/api/queryKeys";
import { postMasil } from "@/lib/api/masil/client";
import { MasilRecordRequest } from "@/types/Request";
import { drawPath } from "@/utils/drawPath";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useImageUpload from "@/lib/hooks/useImageUpload";

const useLogRecordEditController = () => {
  const { setModalView, openModal, closeModal } = useUI();
  const { setUserLocation } = useUserLocationStore();
  const { logData, handleRemovePin, handleClickPin } = useLogRecordContext();

  const { register, getValues } = useForm<{ logMemo: string }>({
    defaultValues: { logMemo: logData.content },
  });
  const imageMutation = useImageUpload();

  const router = useRouter();

  const logUploadMutation = useMutation({
    mutationKey: [MASIL_KEY.RECORD_SUBMIT],
    mutationFn: async (data: MasilRecordRequest) => postMasil({ data }),
  });

  useEffect(() => {
    const pathLength = logData.path.length;
    const latAvg = logData.path.reduce((total, point) => total + point.lat, 0) / pathLength;
    const lngAvg = logData.path.reduce((total, point) => total + point.lng, 0) / pathLength;

    // TODO: 배포 후 테스트 필요
    if (latAvg && lngAvg) {
      setUserLocation({ lat: latAvg, lng: lngAvg });
    }
  }, []);

  /**
   * @func handleSubmit
   *
   * @brief 폼을 통해 입력받은 Memo를 logData의 content에 저장한 후, 서버에 전송합니다.
   *
   * 이후, 서버에 전송 성공시 Done Modal이 제공되어지고, 공유를 선택시 시작지점과 성성된 log id 를 post 생성 페이지에 전달합니다.
   */
  const handleSubmit = () => {
    // TODO
    // 1. 칼로리

    const newData: MasilRecordRequest = {
      ...logData,
      content: getValues("logMemo"),
      calories: 9999,

      path: [
        { lat: 22.22, lng: 83.33 },
        { lat: 42.22, lng: 33.33 },
        { lat: 22.22, lng: 33.33 },
        { lat: 22.22, lng: 153.33 },
        { lat: 32.22, lng: 33.33 },
        { lat: 22.22, lng: 33.33 },
        { lat: 22.22, lng: 23.33 },
      ],
    };

    const canvas = drawPath(logData.path);

    // Canvas 이미지 업로드 정상 동작 안함
    canvas?.canvas.toBlob((file) => {
      if (!file) {
        return;
      }

      imageMutation.mutate(file, {
        onSuccess: ({ imageUrl }) => {
          newData["thumbnailUrl"] = imageUrl;
          console.log(newData);

          logUploadMutation.mutate(newData, {
            onSuccess: (res) => {
              const { id } = res;
              router.push(`/log/${id}`);

              setModalView("LOG_RECORD_DONE_VIEW");
              openModal({
                onClickUploadPost: () => {
                  const startPoint = JSON.stringify(logData.path[0]);

                  router.push(`/post/create?id=${id}&point=${startPoint}`);
                  closeModal();
                },
                onClickCancel: () => {
                  closeModal();
                },
                logData,
              });
            },

            onError: () => {
              setModalView("LOG_RECORD_ALERT_VIEW");
              openModal({
                message: `산책로 저장에 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.`,
              });
            },
          });
        },
      });
    });
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
