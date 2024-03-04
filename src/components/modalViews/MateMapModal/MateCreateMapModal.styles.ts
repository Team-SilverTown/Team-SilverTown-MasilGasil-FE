import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MateCreateMapDetail = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MateCreateMapTitle = styled.h6`
  margin-left: 0.4rem;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const MateCreateWarningMessage = styled.p`
  width: 100%;
  height: 2.4rem;

  border: 1px solid red;
`;
