import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const ParticipantModalLayout = styled.section`
  width: 26rem;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  user-select: none;
`;

export const ParticipantModalUserInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ParticipantModalUserNickName = styled.h6`
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
  letter-spacing: 0.05rem;
`;

export const ParticipantModalContentTitle = styled.h6`
  margin-top: 1rem;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
`;

export const ParticipantModalMessage = styled.p<{ $isEmpty: boolean }>`
  width: 100%;

  font-size: ${FONT_SIZE.BASIC};
  font-weight: ${FONT_WEIGHT.REGULAR};
  word-break: keep-all;

  color: ${({ $isEmpty, theme }) => $isEmpty && theme.gray_500};
`;
