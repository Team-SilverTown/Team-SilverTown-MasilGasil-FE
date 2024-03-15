"use client";

import * as S from "./MemberItem.styles";

import { Avatar } from "@/components";
import { Participant } from "@/types/OriginDataType";

interface MemberItemProps {
  participants: Participant;
}

const MemberItem = ({ participants }: MemberItemProps) => {
  const { profileUrl, nickname, id } = participants;

  return (
    <S.MemberItemLayout>
      <Avatar
        src={profileUrl}
        userId={`${id}`}
      />

      <S.MemberNickName>{nickname}</S.MemberNickName>
    </S.MemberItemLayout>
  );
};

export default MemberItem;
