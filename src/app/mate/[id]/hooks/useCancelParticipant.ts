import { useUI } from "@/components/uiContext/UiContext";
import { deleteCancelParticipant } from "@/lib/api/Mate/client";
import { MATE_KEY } from "@/lib/api/queryKeys";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useCancelParticipant = () => {
  const { setModalView, openModal } = useUI();
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: [MATE_KEY.DELETE_MATE_PARTICIPANT],
    mutationFn: (params: { mateId: string | number; participantId: number | string }) =>
      deleteCancelParticipant(params),

    onSuccess: () => {
      setModalView("DONE_VIEW");
      openModal({ message: "참가자를 내보냈습니다!" });
      router.refresh();
    },
    onError: ({ message }) => {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({ message: "문제가 발생했습니다.<br>잠시 후 다시 시도해주세요!" });
      router.refresh();
    },
  });

  return mutation;
};

export default useCancelParticipant;
