import { FONT_SIZE, FONT_WEIGHT, NAV_HEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const LogContainer = styled.section`
  position: relative;
  height: 100%;
  min-height: 100vh;
  transform: scale(1);
  user-select: none;
`;

export const LogContentLayout = styled.section`
  height: 55%;
  padding: 0 2rem;
  padding-bottom: ${NAV_HEIGHT + 2}rem;

  display: flex;
  flex-direction: column;

  .logTab {
    font-size: ${FONT_SIZE.H6};
    font-weight: ${FONT_WEIGHT.BOLD};
  }
  @media (max-width: 380px) {
    .logTab {
      font-size: ${FONT_SIZE.LARGE};
    }
  }
`;

export const LogContentSection = styled.section`
  height: 100%;
  padding: 1rem 0.5rem 2rem 0.5rem;

  overflow-y: auto;
`;
