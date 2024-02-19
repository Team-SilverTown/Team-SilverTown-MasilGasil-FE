"use client";

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { styled } from "twin.macro";
import { CONTAINER, NAV_HEIGHT } from "./theme";

export const GlobalStyle = createGlobalStyle<any>`
    ${normalize}

    * {
      color: ${(props: any) => props.theme.text_primary_color};
    }

    html,
    body {
      height: 100%;
      box-sizing: border-box;
      touch-action: manipulation;
    

      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      overscroll-behavior-x: none;


    }

    html {
      font-size: 62.5%;
    }


    body {
      max-width: 600px;
      min-height: 100%;
      margin: 0 auto;
      
      background-color: ${(props) => props.theme.background_color};
      
      position: relative;
      
      font-size : 1.4rem;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

`;

export const CommonContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px ${CONTAINER.PADDING_HORIZONTAL}rem;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 100%;
  height: 100%;
`;
