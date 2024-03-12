import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const AnimationAlertModalLayout = styled.section`
  width: 26rem;
  padding: 3rem 0 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AnimationAlertModalMessage = styled.h6`
  width: 100%;
  padding: 3rem 0;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  text-align: center;
  line-height: 1.3;
  word-break: keep-all;
`;
