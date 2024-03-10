"use client";

import styled from "styled-components";
import { CONTAINER, NAV_HEIGHT } from "@/styles/theme";

export const UserProfileContainer = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: ${NAV_HEIGHT}rem ${CONTAINER.PADDING_HORIZONTAL}rem;
`;

export const UserProfileLayout = styled.article`
  height: 100%;
  padding: 2rem 0;
  overflow-y: auto;
  overscroll-behavior: contain;

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
