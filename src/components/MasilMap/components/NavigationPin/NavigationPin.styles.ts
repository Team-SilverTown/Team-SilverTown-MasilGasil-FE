import styled from "styled-components";

export const NavigationPinBackground = styled.div`
  width: 2.8rem;
  height: 2.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: ${({ theme }) => theme.transparent_50};
  border-radius: 50%;
  box-shadow: 0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.1);

  cursor: pointer;
  z-index: 0;
`;

export const NavigationPinBody = styled.div`
  width: 1.6rem;
  height: 1.6rem;

  background-color: ${({ theme }) => theme.green_300};
  border-radius: 50%;
`;
