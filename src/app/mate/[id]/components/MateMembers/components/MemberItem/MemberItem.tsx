"use client";

import * as S from "./MemberItem.styles";

import { Avatar } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { Participant } from "@/types/OriginDataType";
import { CSSProperties } from "react";

interface MemberItemProps {
  participant: Participant;
  authorId: number;
  isApplicantItem?: boolean;
  isAuthor: boolean;
  onAccept: (participantId: string | number) => void;
  onCancel: (participantId: string | number) => void;
  onClickMessage: (participant: Participant) => void;
  key?: string | number;
}

const MemberItem = ({
  participant,
  authorId,
  isAuthor,
  onAccept,
  onCancel,
  onClickMessage,
  isApplicantItem = false,
}: MemberItemProps) => {
  const { profileUrl, nickname, id, userId } = participant;

  return (
    <S.MemberItemLayout>
      <Avatar
        src={profileUrl}
        userId={id.toString()}
      />

      <S.MemberNickName>{nickname}</S.MemberNickName>

      {isAuthor && authorId !== userId && (
        <S.MemberAction>
          <MateButton
            text={"참가신청 메세지"}
            onClick={() => onClickMessage(participant)}
            style={{
              marginRight: "2rem",
            }}
          />

          {isApplicantItem && (
            <MateButton
              text={"수락"}
              onClick={() => {
                onAccept(participant.id);
              }}
            />
          )}

          <MateButton
            text={isApplicantItem ? "거절" : "내보내기"}
            isCancelButton={true}
            onClick={() => {
              onCancel(participant.id);
            }}
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
  style?: CSSProperties;
}

const MateButton = ({ text, onClick, isCancelButton = false, style }: MateButtonProps) => {
  const theme = useTheme();

  return (
    <S.MemberButton
      onClick={onClick}
      style={style}
    >
      <p style={{ color: isCancelButton ? theme?.red_500 : theme?.black }}>{text}</p>
      <div style={{ backgroundColor: isCancelButton ? theme?.red_500 : theme?.black }} />
    </S.MemberButton>
  );
};
