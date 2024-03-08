import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MateCreateMapAlert = styled.p`
  margin-left: 0.4rem;
  margin-bottom: 0.4rem;

  font-size: ${FONT_SIZE.MINI};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.gray_500};

  user-select: none;
`;

export const MateCreateMapDetail = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  user-select: none;
`;

export const MateCreateMapTitle = styled.h6`
  margin-left: 0.4rem;
  margin-bottom: 1rem;

  font-size: ${FONT_SIZE.BASIC};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const MateCreateWarningMessage = styled.p`
  width: 100%;
  height: 2.4rem;
  margin-bottom: 1.6rem;

  display: flex;
  align-items: center;
`;
