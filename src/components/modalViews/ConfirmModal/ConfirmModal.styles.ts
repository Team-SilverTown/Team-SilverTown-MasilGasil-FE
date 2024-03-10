import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

export const ConfirmModalLayout = styled.div`
  width: 28rem;
  padding: 0 2rem;

  user-select: none;
`;

export const ConfirmModalMessage = styled.p`
  width: 100%;
  padding: 1rem 0;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  line-height: 1.4;
  word-break: keep-all;
`;

export const ConfirmModalWarning = styled.p`
  width: 100%;

  font-size: ${FONT_SIZE.MINI};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: red;
`;

export const ConfirmModalActionsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
