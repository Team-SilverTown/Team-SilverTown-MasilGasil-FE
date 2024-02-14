import styled from "styled-components";

interface CustomPinLayoutProps {
  $size: number;
}

export const CustomPinLayout = styled.div<CustomPinLayoutProps>`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  display: flex;
  align-items: center;
  justify-content: center;

  // 추후 Pin 디자인 확정시 변경

  background-color: red;
  border-radius: 50%;
`;
