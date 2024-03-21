"use client";

import { Avatar } from "@/components";
import * as S from "./MateParticipantModal.styles";

import { ModalLayout } from "@/components/Modal";
import { Participant } from "@/types/OriginDataType";

interface MateParticipantModalProps {
  participant: Participant;
}

interface ModalProp {
  props: MateParticipantModalProps;
}

const MateParticipantModal = ({ props }: ModalProp) => {
  const { participant } = props;
  const { message, nickname, profileUrl } = participant;
  console.log(participant);

  return (
    <ModalLayout>
      <S.ParticipantModalLayout>
        <S.ParticipantModalUserInfo>
          <Avatar
            size="sm"
            src={profileUrl}
          />
          <S.ParticipantModalUserNickName>{nickname}</S.ParticipantModalUserNickName>
        </S.ParticipantModalUserInfo>

        <S.ParticipantModalContentTitle>참가신청 메세지</S.ParticipantModalContentTitle>
        <S.ParticipantModalMessage $isEmpty={!message}>
          {message ? message : "참가신청 메세지가 없습니다."}
        </S.ParticipantModalMessage>
      </S.ParticipantModalLayout>
    </ModalLayout>
  );
};

export default MateParticipantModal;
