import { DISPLAY_NONE_SCROLLBAR, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
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
  margin-bottom: 3rem;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.REGULAR};

  user-select: none;
`;

export const IntensityOptionList = styled.ul`
  width: 100%;
  margin-bottom: 2.8rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  user-select: none;
`;
