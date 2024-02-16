"use client";

import { BORDER_TINE_WIDTH } from "@/styles/theme";
import styled from "styled-components";

const ButtonBaseWrapper = styled.button<any>`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  background-color: ${(props) =>
    props.$buttonColor ? props.$buttonColor : props.theme.container_color};

  &,
  & > span {
    color: ${(props) => (props.$textColor ? props.$textColor : "")};
  }

  & .ripple > span {
    background-color: ${(props) =>
      props.$rippleColor ? props.$rippleColor : props.theme.transparent_30};
  }
`;

export const Flat = styled(ButtonBaseWrapper)<any>``;

export const Neumorp = styled(ButtonBaseWrapper)<any>`
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${(props) => props.theme.transparent_50};
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_50};
`;

export const Naked = styled(ButtonBaseWrapper)<any>`
  background-color: transparent;
`;

export const OutLine = styled(ButtonBaseWrapper)<any>`
  background-color: transparent;
  border-width: ${BORDER_TINE_WIDTH}px;
  border-color: ${(props) => (props.$buttonColor ? props.$buttonColor : props.theme.black)};
`;

export const Disabled = styled(ButtonBaseWrapper)<any>`
  background-color: ${(props) => props.theme.gray_100};

  &,
  & > span {
    color: ${(props) => props.theme.gray_500};
  }
`;
