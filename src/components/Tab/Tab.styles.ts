"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const Tabs = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-bottom-width: 1.5px;
  border-color: ${(props) => props.theme.gray_light + 80};
  text-align: center;
  font-size: ${FONT_SIZE.MINI};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const Tab = styled.li`
  list-style: none;

  border-bottom-right-radius: 0;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  user-select: none;

  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${(props) => props.theme.text_primary_color};
  }
`;

export const TabText = styled.a<any>`
  width: 100%;

  color: ${(props) => (props.$focused ? props.theme.text_primary_color : props.theme.gray_300)};
`;
