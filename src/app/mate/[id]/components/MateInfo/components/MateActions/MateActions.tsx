"use client";

import { useMemo } from "react";

import useAuthStore from "@/lib/stores/useAuthStore";
import useMeStore from "@/lib/stores/useMeStore";
import { Participant } from "@/types/OriginDataType";
import { MateDetailResponse } from "@/types/Response";

import { useMateButtonList } from "./hooks";

interface MateActionsProps {
  mateData: MateDetailResponse;
  acceptedUserList: Participant[];
  requestedUserList: Participant[];
}

const MateActions = ({ mateData, acceptedUserList, requestedUserList }: MateActionsProps) => {
  const { userId } = useMeStore();
  const { isLogIn } = useAuthStore();

  const participantId = useMemo(() => {
    if (!isLogIn) {
      return false;
    }

    const matchParticipant = mateData.participants.find(
      (participant) => userId === participant.userId,
    );

    if (matchParticipant) {
      return matchParticipant.id;
    }

    return false;
  }, [mateData, userId]);

  /**
   * @hooks useMateButtonList
   *
   * @summary
   *
   * 해당 메이트의 모든 액션 로직과 버튼을 만들어 제공함
   */
  const MateButtons = useMateButtonList({
    participantId: participantId,
    mateId: mateData.id,
  });

  /**
   * 현재 사용자의 메이트에대한 상태 파악
   */
  const userStatus = useMemo(() => {
    if (!isLogIn) {
      return "NOT_LOGIN";
    }

    if (mateData.status === "CLOSED") {
      return "CLOSE";
    }

    if (mateData.authorId === userId) {
      return "AUTHOR";
    }

    const isAccept = acceptedUserList.find((acceptedUser) => acceptedUser.userId === userId);

    if (isAccept) {
      return "ACCEPTED";
    }

    const isRequested = requestedUserList.find((acceptedUser) => acceptedUser.userId === userId);

    if (isRequested) {
      return "REQUESTED";
    }

    return "NO_ACTION";
  }, [requestedUserList, acceptedUserList, mateData, userId]);

  return (
    <div className="mb-[1.2rem] flex w-full flex-col items-center gap-[2rem]">
      {userStatus === "NOT_LOGIN" && MateButtons.Login}
      {userStatus === "NO_ACTION" && MateButtons.Request}
      {userStatus === "REQUESTED" && (
        <>
          {MateButtons.Pending}
          {MateButtons.Cancel}
        </>
      )}
      {userStatus === "ACCEPTED" && (
        <>
          {MateButtons.Accepted}
          {MateButtons.Cancel}
        </>
      )}
      {userStatus === "CLOSE" && <>{MateButtons.Completed}</>}
      {userStatus === "AUTHOR" && MateButtons.Author}
    </div>
  );
};

export default MateActions;
