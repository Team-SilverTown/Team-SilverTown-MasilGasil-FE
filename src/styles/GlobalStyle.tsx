"use client";

import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { CONTAINER, NAV_HEIGHT } from "./theme";

export const GlobalStyle = createGlobalStyle<any>`
    ${normalize}

    * {
      color: ${(props: any) => props.theme.text_primary_color};
    }

    html,
    body {
      width: 100%;
      box-sizing: border-box;
      touch-action: manipulation;
    
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      overscroll-behavior-x: none;
    }

    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      width: 100vw;
      height: 100%;
      background-color: ${(props) => props.theme.background_color};
  
      font-size : 1.4rem;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

      padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    }

    main {
      width: 100%;
      height: 100%;
      max-width: ${CONTAINER.MAX_WIDTH}rem;
      overflow-x: hidden;
      margin: 0 auto;
      position: relative;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    main::-webkit-scrollbar {
      display: none;
    }

`;

export const CommonContainer = styled.div`
  padding: ${NAV_HEIGHT}rem ${CONTAINER.PADDING_HORIZONTAL}rem ${NAV_HEIGHT + 2}rem
    ${CONTAINER.PADDING_HORIZONTAL}rem;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
`;

export const CommonContainerTailwind = `
w-full
h-full
min-h-screen
py-36 
px-6 

box-border
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
