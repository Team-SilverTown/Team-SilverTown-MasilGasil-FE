import { CONTAINER, FONT_SIZE, FONT_WEIGHT, NAV_HEIGHT, Z_INDEX } from "@/styles/theme";
import styled from "styled-components";

export const TopNavigatorContainer = styled.nav<any>`
  width: 100%;
  max-width: ${CONTAINER.MAX_WIDTH}rem;
  height: ${NAV_HEIGHT}rem;
  display: flex;
  position: fixed;
  top: 0;
  padding: 1rem ${CONTAINER.PADDING_HORIZONTAL}rem;
  z-index: ${Z_INDEX.NAVIGATOR};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.background_color};
`;

export const TopNavLeftSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TobNavRightSection = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TopNavCenterSection = styled.section`
  height: 100%;

  display: flex;
  align-items: center;
  & > h1 {
    font-size: ${FONT_SIZE.LARGE};
    font-weight: ${FONT_WEIGHT.SEMIBOLD};
  }
`;

export const SkipText = styled.span`
  font-size: ${FONT_SIZE.MINI};
  color: ${(props) => props.theme.transparent_90};
`;
