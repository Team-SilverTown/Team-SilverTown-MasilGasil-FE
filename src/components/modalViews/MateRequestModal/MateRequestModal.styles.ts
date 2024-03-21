import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MateRequestModalLayout = styled.section`
  width: 26rem;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
`;

export const MateRequestModalTitle = styled.h6`
  width: 100%;
  margin-bottom: 3.2rem;
  margin-left: 0.4rem;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const MateRequestModalDescription = styled.p`
  width: 100%;
  margin-bottom: 1rem;
  margin-left: 0.4rem;

  font-size: ${FONT_SIZE.SMALL};
  font-weight: ${FONT_WEIGHT.MEDIUM};
`;

export const MateRequestModalActions = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
`;
