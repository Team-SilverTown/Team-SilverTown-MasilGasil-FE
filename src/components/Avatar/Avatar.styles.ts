"use client";

import styled from "styled-components";

interface AvatarLayoutProps {
  $size: number;
}

export const AvatarLayout = styled.div<AvatarLayoutProps>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
