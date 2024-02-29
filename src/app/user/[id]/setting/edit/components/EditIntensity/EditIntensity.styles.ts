import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const IntensityTitle = styled.h6`
  padding-left: 0.6rem;
  margin-bottom: 1.2rem;

  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};

  user-select: none;
`;

export const IntensityDescription = styled.p`
  padding-left: 0.6rem;
  margin-bottom: 1.6rem;

  font-size: ${FONT_SIZE.SMALL};
  font-weight: ${FONT_WEIGHT.REGULAR};

  user-select: none;
`;
