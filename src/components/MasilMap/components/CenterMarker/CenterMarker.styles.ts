import styled from "styled-components";

interface CenterMarkerLayoutProps {
  $width: number;
  $height: number;
}

export const CenterMarkerLayout = styled.div<CenterMarkerLayoutProps>`
  width: ${({ $height }) => `${$height}px`};
  height: ${({ $height }) => `${$height}px`};
`;
