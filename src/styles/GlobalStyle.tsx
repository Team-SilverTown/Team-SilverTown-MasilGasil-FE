"use client";

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle<any>`
    ${normalize}

    * {
      color: ${(props: any) => props.theme.text_primary_color};
    }

    body {
      background-color: ${(props: any) => props.theme.background_color};
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
      position: relative;
      max-width: 600px;
      min-height: 100%;
      margin: 0 auto;

      font-size : 1.6rem;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

`;
