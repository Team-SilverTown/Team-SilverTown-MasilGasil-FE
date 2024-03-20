"use client";

import * as S from "./MembersList.styles";
import { MemberItem } from "..";
import { Participant } from "@/types/OriginDataType";
import { useUI } from "@/components/uiContext/UiContext";

interface MembersListProps {
  participants: Participant[];
  authorId: number;
  isAuthor: boolean;
  isApplicantList?: boolean;
}

const MembersList = ({
  participants,
  authorId,
  isAuthor,
  isApplicantList = false,
}: MembersListProps) => {
  const { openModal, setModalView } = useUI();

  const handleAccept = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  const handleCancel = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
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
