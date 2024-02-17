import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

export const AlertModalLayout = styled.div`
  width: 28rem;
  padding: 0 2rem;

  user-select: none;
`;

export const AlertModalMessage = styled.p`
  width: 100%;
  padding: 4rem 0;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
`;
