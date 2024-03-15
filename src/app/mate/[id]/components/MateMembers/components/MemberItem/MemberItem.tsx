"use client";

import * as S from "./MemberItem.styles";

import { Avatar, Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { Participant } from "@/types/OriginDataType";

interface MemberItemProps {
  participants: Participant;
  isApplicantItem?: boolean;
  key?: string | number;
}

const MemberItem = ({ participants, isApplicantItem = false }: MemberItemProps) => {
  const { profileUrl, nickname, id } = participants;

  return (
    <S.MemberItemLayout>
      <Avatar
        src={profileUrl}
        userId={`${id}`}
      />

      <S.MemberNickName>{nickname}</S.MemberNickName>

      {isApplicantItem && (
        <S.MemberAction>
          <MateButton
            text={"수락"}
            onClick={() => {}}
          />

          <MateButton
            text={"거절"}
            isCancelButton={true}
            onClick={() => {}}
          />
        </S.MemberAction>
      )}
    </S.MemberItemLayout>
  );
};

export default MemberItem;

interface MateButtonProps {
  text: string;
  onClick: () => void;
  isCancelButton?: boolean;
}

const MateButton = ({ text, onClick, isCancelButton = false }: MateButtonProps) => {
  const theme = useTheme();

  return (
    <S.MemberButton onClick={onClick}>
      <p style={{ color: isCancelButton ? theme?.red_500 : theme?.black }}>{text}</p>
      <div style={{ backgroundColor: isCancelButton ? theme?.red_500 : theme?.black }} />
    </S.MemberButton>
  );
};
