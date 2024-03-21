"use client";

import * as S from "./MembersList.styles";
import { MemberItem } from "..";
import { Participant } from "@/types/OriginDataType";
import { useUI } from "@/components/uiContext/UiContext";
import useCancelParticipant from "@/app/mate/[id]/hooks/useCancelParticipant";
import { useAcceptParticipant } from "@/app/mate/[id]/hooks";

interface MembersListProps {
  participants: Participant[];
  authorId: number;
  isAuthor: boolean;
  isApplicantList?: boolean;
  mateId: string | number;
}

const MembersList = ({
  participants,
  authorId,
  isAuthor,
  isApplicantList = false,
  mateId,
}: MembersListProps) => {
  const { openModal, setModalView } = useUI();
  const cancelParticipantMutation = useCancelParticipant();
  const acceptParticipantMutation = useAcceptParticipant();

  const handleAccept = (participantId: string | number) => {
    setModalView("CONFIRM_VIEW");
    openModal({
      message: "신청을 수락하시겠어요?",
      onClickAccept: () => {
        acceptParticipantMutation.mutate({ mateId, participantId });
      },
    });
  };

  const handleCancel = (participantId: string | number) => {
    setModalView("CONFIRM_VIEW");
    openModal({
      message: "정말로 신청을 거절하시겠어요?",
      warningMessage: "거절하시면 되돌릴 수 없습니다.",
      onClickAccept: () => {
        cancelParticipantMutation.mutate({ mateId, participantId });
      },
    });
  };

  const handleClickMessage = (participant: Participant) => {
    setModalView("MATE_PARTICIPANT_USER_VIEW");
    openModal({ participant });
  };

  return (
    <S.MateMemberList>
      {participants &&
        participants.map((user) => (
          <MemberItem
            key={user.userId}
            participant={user}
            authorId={authorId}
            isAuthor={isAuthor}
            isApplicantItem={isApplicantList}
            onAccept={handleAccept}
            onCancel={handleCancel}
            onClickMessage={handleClickMessage}
          />
        ))}
    </S.MateMemberList>
  );
};

export default MembersList;
