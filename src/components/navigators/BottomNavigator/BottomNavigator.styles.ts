import styled from "styled-components";

import { BORDER, CONTAINER, FONT_SIZE, NAV_HEIGHT, Z_INDEX } from "@/styles/theme";

export const BottomNavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${CONTAINER.MAX_WIDTH}rem;
  height: ${NAV_HEIGHT}rem;
  padding: ${CONTAINER.PADDING_HORIZONTAL}rem;
  background-color: ${({ theme }) => theme.background_color};
  border-top: ${BORDER.TINE_WIDTH}px solid ${(props) => props.theme.transparent_10};
  align-items: center;
  z-index: ${Z_INDEX.NAVIGATOR};
`;

export const BottomNavItem = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ $active, theme }) => ($active ? theme.green_500 : theme.gray_300)};
  font-size: ${FONT_SIZE.MINI};
  cursor: pointer;

  padding-bottom: env(safe-area-inset-bottom); // 배포 후 확인 필요

  & > svg {
    stroke: ${({ $active, theme }) => ($active ? "none" : theme.gray_300)};
    fill: ${({ $active, theme }) => ($active ? theme.green_500 : "none")};
    margin-bottom: 0.4rem;
    width: 2.2rem;
    height: 2.2rem;
  }

  &:hover {
    color: ${({ $active, theme }) => ($active ? "none" : theme.green_500)};
    & > svg {
      stroke: ${({ $active, theme }) => ($active ? "none" : theme.green_500)};
    }
  }
`;

export const ProfileCircle = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: ${({ $active, theme }) => ($active ? theme.green_500 : theme.gray_300)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.4rem;

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? "none" : theme.green_500)};
  }
`;
