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

export const NoWalkRecordMessage = styled.li`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 12rem;
`;
