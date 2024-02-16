import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px)
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Title = styled.span`
  opacity: 0;
  animation: ${animation} 700ms ease-out 1;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
  font-size: 2rem;
  font-weight: bolder;
`;

export const SubTitle = styled.span`
  opacity: 0;
  animation: ${animation} 600ms ease-out 1;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  font-weight: 400;
`;
