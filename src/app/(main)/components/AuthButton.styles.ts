"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AuthButtonWrapper = styled.div`
  position: absolute;
  bottom: 15%;
  width: 100%;
  opacity: 0;
  animation: ${fadeAnimation} 400ms ease-out 1;
  animation-delay: 1200ms;
  animation-fill-mode: forwards;
  left: 0;
`;

export const ButtonContent = styled.span`
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: #000000;
`;
