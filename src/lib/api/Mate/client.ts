import { MateCreateRequest } from "@/types/Request";

import { DELETE, POST, PUT } from "../clientRootAPI";
import { END_POINT } from "../endPoints";

export const postMateParticipantRequest = async ({
  message,
  mateId,
}: {
  message: string;
  mateId: string | number;
}) => {
  return await POST<{ id: string }>({
    endPoint: END_POINT.MATE.POST_MATE_PARTICIPANT_REQUEST(mateId),
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
    endPoint: END_POINT.MATE.DELETE_CANCEL_PARTICIPANT({ mateId, participantId }),
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
    endPoint: END_POINT.MATE.ACCEPT_PARTICIPANT({ mateId, participantId }),
    auth: true,
  });
};

export const postMateCreate = async ({ mateData }: { mateData: MateCreateRequest }) => {
  return await POST<{ id: string }>({
    endPoint: END_POINT.MATE.CREATE,
    data: mateData,
    auth: true,
  });
};
