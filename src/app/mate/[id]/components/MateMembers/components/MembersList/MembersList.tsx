"use client";

import * as S from "./MembersList.styles";
import { MemberItem } from "..";
import { Participant } from "@/types/OriginDataType";

interface MembersListProps {
  participants: Participant[];
  isApplicantList?: boolean;
}

const MembersList = ({ participants, isApplicantList = false }: MembersListProps) => {
  return (
    <S.MateMemberList>
      {participants &&
        participants.map((user) => (
          <MemberItem
            participants={user}
            key={user.id}
            isApplicantItem={isApplicantList}
          />
        ))}
    </S.MateMemberList>
  );
};

export default MembersList;
