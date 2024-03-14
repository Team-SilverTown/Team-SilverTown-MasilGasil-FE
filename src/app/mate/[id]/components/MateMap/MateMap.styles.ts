import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MateMapWrapper = styled.article`
  width: 100%;
  height: 40%;
  min-height: 35%;

  position: relative;
`;

export const MateGatherPlace = styled.p`
  width: 100%;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  line-height: 1.2;
  word-break: keep-all;
`;
