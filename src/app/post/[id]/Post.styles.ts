import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const PostContainer = styled.section`
  position: relative;
  height: 100%;
  min-height: 100vh;
  transform: scale(1);

  user-select: none;
`;

export const PostContentLayout = styled.section`
  height: 55%;
  padding: 0 2rem;

  .postTab {
    font-size: ${FONT_SIZE.H6};
    font-weight: ${FONT_WEIGHT.BOLD};
  }

  @media (max-width: 380px) {
    .postTab {
      font-size: ${FONT_SIZE.LARGE};
    }
  }
`;

export const PostContentSection = styled.section`
  height: calc(100% - 14rem);
  padding: 1rem 0.5rem;
`;
