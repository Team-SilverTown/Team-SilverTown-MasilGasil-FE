import { useUI } from "@/components/uiContext/UiContext";
import { acceptParticipant } from "@/lib/api/Mate/client";
import { MATE_KEY } from "@/lib/api/queryKeys";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useAcceptParticipant = () => {
  const { setModalView, openModal } = useUI();
  const router = useRouter();
  const mutation = useMutation({
    mutationKey: [MATE_KEY.ACCEPT_MATE_PARTICIPANT],
    mutationFn: async (params: { mateId: string | number; participantId: string | number }) =>
      await acceptParticipant(params),

    onSuccess: () => {
      setModalView("DONE_VIEW");
      openModal({ message: "참가 요청을 수락하였습니다." });
      router.refresh();
    },
    onError: ({ message }) => {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({
        message: checkErrorCode({
          errorCode: message,
          defaultMessage: "해당 요청에 문제가 발생하였습니다.<br>잠시 후 다시 시도해주세요!",
        }),
      });
      router.refresh();
    },
  });

  return mutation;
};

export default useAcceptParticipant;
