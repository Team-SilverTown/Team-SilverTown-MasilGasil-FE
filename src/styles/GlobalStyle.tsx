"use client";

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle<any>`
    ${normalize}

    *{
      color: ${(props) => props.theme.text_primary_color};
      /* font-family: sans-serif; */
    }
    body {
      background-color: ${(props) => props.theme.background_color};
      /* background-repeat: repeat; */
    }

    html,
    body {
      height: 100%;
      box-sizing: border-box;
      touch-action: manipulation;
      /* font-family: var(--font-sans); */
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* background-color: var(--primary); */
      /* color: var(--text-primary); */
      overscroll-behavior-x: none;
    }

    body {
      position: relative;
      min-height: 100%;
      margin: 0;
    }
`;
