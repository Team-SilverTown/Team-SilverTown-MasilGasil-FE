import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MateMapTitle = styled.h6`
  width: 100%;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
`;

export const MateMapWrapper = styled.div`
  width: 100%;
  height: 40%;
  min-height: 40%;

  position: relative;
`;

export const MateGatherPlace = styled.p`
  width: 100%;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  line-height: 1.2;
  word-break: keep-all;
`;
