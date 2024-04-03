import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const ConfirmModalLayout = styled.div`
  width: 26rem;
  padding: 0 2rem;

  user-select: none;
`;

export const ConfirmModalMessage = styled.p`
  width: 100%;
  padding: 4rem 0 1rem 0;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  line-height: 1.4;
  word-break: keep-all;
  text-align: center;
`;

export const ConfirmModalWarning = styled.p`
  width: 100%;
  padding-bottom: 2rem;

  font-size: ${FONT_SIZE.MINI};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: red;
  text-align: center;
`;

export const ConfirmModalActionsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
