import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const HomeWalkListSection = styled.section`
  margin-top: 2rem;
`;

export const HomeWalkListTitle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: ${FONT_SIZE.H6};
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;
