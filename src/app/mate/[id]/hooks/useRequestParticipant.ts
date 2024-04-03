import { useUI } from "@/components/uiContext/UiContext";
import { postMateParticipantRequest } from "@/lib/api/Mate/client";
import { MATE_KEY } from "@/lib/api/queryKeys";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

const useRequestParticipant = () => {
  const { setModalView, openModal } = useUI();
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: [MATE_KEY.POST_MATE_PARTICIPANT_REQUEST],
    mutationFn: async (param: { message: string; mateId: string | number }) =>
      await postMateParticipantRequest(param),

    onSuccess: () => {
      setModalView("DONE_VIEW");
      openModal({
        message: "신청이 완료되었습니다!",
      });

      router.refresh();
    },

    onError: ({ message }) => {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({
        message: checkErrorCode({
          errorCode: message,
          defaultMessage: "신청에 문제가 발생하였습니다.<br>잠시 후 다시 시도해주세요!",
        }),
      });
      router.refresh();
    },
  });

  return mutation;
};

export default useRequestParticipant;
