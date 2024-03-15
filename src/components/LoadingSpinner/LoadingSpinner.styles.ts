"use client";

import { Z_INDEX } from "@/styles/theme";
import styled from "styled-components";

export const LoadingSpinnerBackground = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  background-color: ${({ theme }) => theme.transparent_50};
  z-index: ${Z_INDEX.SPINNER};
`;
