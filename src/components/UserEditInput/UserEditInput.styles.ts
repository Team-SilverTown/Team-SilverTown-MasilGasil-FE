"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const UserEditInputTitle = styled.h6`
  margin-bottom: 1.6rem;
  padding-left: 0.6rem;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};

  user-select: none;
`;

export const UserEditInputDescription = styled.span`
  margin-left: 1rem;

  font-size: ${FONT_SIZE.SMALL};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.gray_500};
`;

export const UserEditInputActions = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const UserEditInputUnit = styled.p`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.BOLD};

  opacity: 0.8;
  user-select: none;
`;

export const UserEditWarning = styled.div`
  width: 100%;
  min-height: 2.8rem;
  padding-left: 0.6rem;

  display: flex;
  align-items: center;
`;
