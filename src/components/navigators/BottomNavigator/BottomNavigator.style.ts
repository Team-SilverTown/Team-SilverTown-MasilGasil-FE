import styled from "styled-components";

export const BottomNavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.container_color};
  align-items: center;
  z-index: 1000;
`;

export const BottomNavItem = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ $active, theme }) => ($active ? theme.green_500 : theme.gray_300)};
  font-size: 1.3rem;
  cursor: pointer;

  & > svg {
    stroke: ${({ $active, theme }) => ($active ? "none" : theme.gray_300)};
    fill: ${({ $active, theme }) => ($active ? theme.green_500 : "none")};
    margin-bottom: 1rem;
  }

  &:hover {
    color: ${({ $active, theme }) => ($active ? "none" : theme.green_500)};
    & > svg {
      stroke: ${({ $active, theme }) => ($active ? "none" : theme.green_500)};
    }
  }
`;

export const ProfileCircle = styled.div<{ $active: boolean }>`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background-color: ${({ $active, theme }) => ($active ? theme.green_500 : theme.gray_300)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? "none" : theme.green_500)};
  }
`;