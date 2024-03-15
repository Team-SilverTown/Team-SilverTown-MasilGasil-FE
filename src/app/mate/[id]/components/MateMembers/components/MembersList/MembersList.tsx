"use client";

import * as S from "./MembersList.styles";
import { MemberItem } from "..";
import { Participant } from "@/types/OriginDataType";
import { useUI } from "@/components/uiContext/UiContext";

interface MembersListProps {
  participants: Participant[];
  isApplicantList?: boolean;
}

const MembersList = ({ participants, isApplicantList = false }: MembersListProps) => {
  const { openModal, setModalView } = useUI();

  const handleAccept = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  const handleCancel = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return (
    <S.MateMemberList>
      {participants &&
        participants.map((user) => (
          <MemberItem
            key={user.id}
            participants={user}
            isApplicantItem={isApplicantList}
            onAccept={handleAccept}
            onCancel={handleCancel}
          />
        ))}
    </S.MateMemberList>
  );
};

export default MembersList;
