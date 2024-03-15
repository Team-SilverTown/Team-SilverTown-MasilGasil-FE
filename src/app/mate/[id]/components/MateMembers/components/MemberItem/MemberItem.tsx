"use client";

import * as S from "./MemberItem.styles";

import { Avatar, Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { Participant } from "@/types/OriginDataType";

interface MemberItemProps {
  participants: Participant;
  isApplicantItem?: boolean;
  onAccept: () => void;
  onCancel: () => void;
  key?: string | number;
}

const MemberItem = ({
  participants,
  onAccept,
  onCancel,
  isApplicantItem = false,
}: MemberItemProps) => {
  const { profileUrl, nickname, id } = participants;

  return (
    <S.MemberItemLayout>
      <Avatar
        src={profileUrl}
        userId={id.toString()}
      />

      <S.MemberNickName>{nickname}</S.MemberNickName>

      {isApplicantItem && (
        <S.MemberAction>
          <MateButton
            text={"수락"}
            onClick={onAccept}
          />

          <MateButton
            text={"거절"}
            isCancelButton={true}
            onClick={onCancel}
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
