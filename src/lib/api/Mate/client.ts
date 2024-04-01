import { MateCreateRequest } from "@/types/Request";

import { DELETE, POST, PUT } from "../clientRootAPI";
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
    data: { message },
    auth: true,
  });
};

export const deleteCancelParticipant = async ({
  mateId,
  participantId,
}: {
  mateId: string | number;
  participantId: string | number;
}) => {
  return await DELETE({
    endPoint: MATE.DELETE_CANCEL_PARTICIPANT({ mateId, participantId }),
    auth: true,
  });
};

export const acceptParticipant = async ({
  mateId,
  participantId,
}: {
  mateId: string | number;
  participantId: string | number;
}) => {
  return await PUT({
    endPoint: MATE.ACCEPT_PARTICIPANT({ mateId, participantId }),
    auth: true,
  });
};

export const postMateCreate = async ({ mateData }: { mateData: MateCreateRequest }) => {
  return await POST<{ id: string }>({
    endPoint: MATE.MATE_CREATE,
    data: mateData,
    auth: true,
  });
};
