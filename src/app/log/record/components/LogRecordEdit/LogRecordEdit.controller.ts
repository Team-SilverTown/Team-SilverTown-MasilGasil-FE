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

const useLogRecordEditController = () => {
  const { setModalView, openModal, closeModal } = useUI();
  const { setUserLocation } = useUserLocationStore();
  const { logData, handleRemovePin, handleClickPin } = useLogRecordContext();
  const { register, getValues } = useForm<{ logMemo: string }>({
    defaultValues: { logMemo: logData.content },
  });
  const router = useRouter();

  const mutation = useMutation({
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
    // const pathThumbnailUrl = drawPath(logData.path);

    // TODO: logData API 통신

    const test = {
      depth1: "세종",
      depth2: "대평",
      depth3: "24",
      depth4: "12421",
      path: [
        { lat: 22, lng: 22 },
        { lat: 22, lng: 22 },
        { lat: 22, lng: 22 },
        { lat: 22, lng: 22 },
      ],
      title: "4214",
      content: getValues("logMemo"),
      distance: 2000,
      totalTime: 50,
      startedAt: new Date().toISOString(),
      pins: [],
      thumbnailUrl: "ㅇㅇㅇ",
      postId: null,
    };

    mutation.mutate(test, {
      onSuccess: (res) => {
        console.log(res);

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
