import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0 14rem;
  box-sizing: border-box;
`;

export const MyInfoSection = styled.section`
  padding: 0 1.5rem;
`;

export const WalkListSection = styled.section`
  padding-left: 1.5rem;
`;

export const HomeWalkListSection = styled.section`
  margin-top: 2rem;
`;

export const HomeWalkListTitle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: ${FONT_SIZE.LARGE};
    font-weight: ${FONT_WEIGHT.BOLD};
  }

  a {
    padding-right: 1.5rem;
  }
`;
