import styled from "styled-components";

interface MatePointPinLayoutProps {
  $width: number;
  $height: number;
}

export const MatePointPinLayout = styled.div<MatePointPinLayoutProps>`
  width: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
`;
