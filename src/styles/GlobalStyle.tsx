"use client";

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { styled } from "twin.macro";

export const GlobalStyle = createGlobalStyle<any>`
    ${normalize}

    *{
      color: ${(props: any) => props.theme.text_primary_color};
      /* font-family: sans-serif; */
    }
    body {
      background-color: ${(props: any) => props.theme.background_color};
      /* background-repeat: repeat; */
    }

    html {
      font-size: 62.5%;
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
      max-width: 600px;
      min-height: 100%;
      margin: 0 auto;
      font-family: 'Pretendard';
    }

    .commonConainer {
      padding: 0 2rem;
    }
`;

export const CommonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 100%;
  height: 100%;
`;
