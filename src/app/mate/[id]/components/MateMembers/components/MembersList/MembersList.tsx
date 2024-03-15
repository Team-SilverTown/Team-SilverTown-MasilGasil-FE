"use client";

import { MateDetailResponse } from "@/types/Response";
import * as GS from "../MateListCommon.styles";
import { MemberItem } from "..";
import { Participant } from "@/types/OriginDataType";

interface MembersListProps {
  participants: Participant[];
  isApplicantList?: boolean;
}

const MembersList = ({ participants, isApplicantList = false }: MembersListProps) => {
  return (
    <GS.MateUserList>
      {participants && participants.map((user) => <MemberItem participants={user} />)}
    </GS.MateUserList>
  );
};

export default MembersList;
