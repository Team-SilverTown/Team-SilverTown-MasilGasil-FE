import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

export const LogRecordAlertModalLayout = styled.div`
  width: 32rem;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  user-select: none;
`;

export const LogRecordAlertModalMessage = styled.p`
  width: 100%;
  padding: 5rem 0 4rem 0;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  word-break: keep-all;
`;
