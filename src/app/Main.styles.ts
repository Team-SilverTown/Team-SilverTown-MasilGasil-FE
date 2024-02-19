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

const showUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px)
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ObjectOne = styled.div`
  position: absolute;
  top: 20%;
  right: -35%;
  width: 90%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.green_300};
  border-radius: 55% 45% 55% 45% / 60% 49% 51% 40%;
  opacity: 0;
  animation: ${fadeAnimation} 500ms ease-out 1;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
`;

export const ObjectTwo = styled.div`
  position: absolute;
  top: 20%;
  left: -5%;
  width: 65%;
  aspect-ratio: 1.2/1;
  background-color: ${(props) => props.theme.green_500};
  border-radius: 75% 25% 70% 30% / 54% 33% 67% 46%;
  opacity: 0;
  animation: ${fadeAnimation} 500ms ease-out 1;
  animation-delay: 600ms;
  animation-fill-mode: forwards;
`;

export const ObjectThree = styled.div`
  position: absolute;
  top: 45%;
  left: 5%;
  width: 50%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.yellow_500};
  border-radius: 62% 38% 55% 45% / 52% 53% 47% 48%;
  opacity: 0;
  animation: ${fadeAnimation} 500ms ease-out 1;
  animation-delay: 1100ms;
  animation-fill-mode: forwards;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 41%;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.white};
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: ${FONT_SIZE.H1};
  font-family: "Maplestory";
  opacity: 0;
  animation: ${showUpAnimation} 700ms ease-out 1;
  animation-delay: 1600ms;
  animation-fill-mode: forwards;
`;

export const AuthButtonWrapper = styled.div`
  position: absolute;
  bottom: 17%;
  width: 100%;
  opacity: 0;
  animation: ${fadeAnimation} 300ms ease-out 1;
  animation-fill-mode: forwards;
`;
