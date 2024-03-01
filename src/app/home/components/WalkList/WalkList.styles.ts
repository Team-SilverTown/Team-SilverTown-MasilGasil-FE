import styled from "styled-components";

export const WalkListContainer = styled.ul`
  display: flex;
  gap: 2rem;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
