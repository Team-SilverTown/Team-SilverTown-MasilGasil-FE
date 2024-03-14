"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const PinEditItem = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const PinIndex = styled.div<{ $backgroundColor: string }>`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: ${(props) => props.$backgroundColor};
  border-radius: 50%;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${(props) => props.theme.text_secondary_color};
`;

export const SlideButtonContent = styled.div<{ $textColor: string }>`
  width: 100%;
  height: 100%;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  font-size: ${FONT_SIZE.LARGE};
  color: ${({ $textColor }) => $textColor};
`;
