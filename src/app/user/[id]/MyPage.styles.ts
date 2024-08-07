"use client";

import { CONTAINER, FONT_SIZE, FONT_WEIGHT, NAV_HEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const UserProfileContainer = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: ${NAV_HEIGHT}rem ${CONTAINER.PADDING_HORIZONTAL}rem;
  padding-bottom: ${NAV_HEIGHT + 2}rem;
  user-select: none;
`;

export const UserProfileLayout = styled.article`
  height: 100%;
  padding: 2rem 0;
  overflow-y: auto;
  overscroll-behavior: contain;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AlertContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${FONT_SIZE.MEDIUM};
  color: ${(props) => props.theme.gray_300};
`;
export const HeaderContainer = styled.div`
  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  padding: 0rem 1.25rem;
  margin: 4rem 0rem 2rem 0rem;
  user-select: none;

  display: flex;
  align-items: center;

  gap: 1rem;
  h3 {
    flex-shrink: 0;
  }
`;
