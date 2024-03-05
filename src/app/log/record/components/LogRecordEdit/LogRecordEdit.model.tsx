import { useEffect } from "react";
import LogRecordEditView from "./LogRecordEdit.view";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useUI } from "@/components/uiContext/UiContext";
import useLogRecordContext from "../../context/LogRecordContext";
import { useMutation } from "@tanstack/react-query";
import { MASIL_KEY } from "@/lib/api/queryKeys";
import { postMasil } from "@/lib/api/masil/server";
import { MasilRecordRequest } from "@/types/Request";
import { drawPath } from "@/utils/drawPath";
import { useRouter } from "next/navigation";

const LogRecordEditModel = () => {
  const { setModalView, openModal, closeModal } = useUI();
  const { setUserLocation } = useUserLocationStore();
  const { logData, removePin, clickPin } = useLogRecordContext();
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
   * @params (memo: string)
   * @brief 폼을 통해 입력받은 Memo를 logData의 content에 저장한 후, 서버에 전송합니다.
   */
  const handleSubmit = (memo: string) => {
    const pathThumbnailUrl = drawPath(logData.path);

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
      content: memo,
      distance: 0,
      totalTime: 0,
      startedAt: new Date().toISOString(),
      pins: [],
      thumbnailUrl: pathThumbnailUrl,
      postId: null,
    };

    mutation.mutate(test, {
      onSuccess: (res) => {
        if (!res) {
          return;
        }
        const { id } = res;

        setModalView("LOG_RECORD_DONE_VIEW");
        openModal({
          onClickUploadPost: () => {
            // 산책로 공유하기를 클릭한 경우
            // 산책로 생성 페이지로 이동, logData를 전달
            closeModal();
          },
          onClickCancel: () => {
            // 산책로 공유하기를 클릭하지 않은 경우
            // 내 기록 페이지로 이동
            router.push(`/log/${id}`);
            closeModal();
          },
          logData,
        });
      },
      // onError: (e) => {
      //   console.log(e);
      // },
    });
  };

  return (
    <LogRecordEditView
      logData={logData}
      onClickPin={clickPin}
      removePinData={removePin}
      onSubmit={handleSubmit}
    />
  );
};

export default LogRecordEditModel;
