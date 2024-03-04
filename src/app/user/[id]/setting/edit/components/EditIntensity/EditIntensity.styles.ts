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

export const IntensityItemContainer = styled.li`
  width: 100%;

  list-style: none;
`;

export const IntensityItemLabel = styled.label`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  cursor: pointer;
`;

export const IntensityItemCircle = styled.i<{ $isSelected: boolean }>`
  min-height: 3rem;
  min-width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.green_500 : theme.transparent_10};
  border-radius: 50%;
`;

export const IntensityOptionDescription = styled.p`
  flex-grow: 1;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  white-space: nowrap;
  overflow: scroll;

  ${DISPLAY_NONE_SCROLLBAR}
`;
