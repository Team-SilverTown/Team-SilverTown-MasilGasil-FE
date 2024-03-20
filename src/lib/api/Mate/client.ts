import { POST } from "../clientRootAPI";
import { MATE } from "../endPoints";

export const postMateParticipantRequest = async ({
  message,
  mateId,
}: {
  message: string;
  mateId: string | number;
}) => {
  return await POST<{ id: string }>({
    endPoint: MATE.POST_MATE_PARTICIPANT_REQUEST(mateId),
    data: message,
    auth: true,
  });
};
