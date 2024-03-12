import { FONT_WEIGHT } from "@/styles/theme";
import { MutableRefObject } from "react";
import styled from "styled-components";

interface PinDetailCardLayoutProps {
  $borderRadius: number | string;
}

interface PinDetailCardWrapperProps {
  $borderRadius: number | string;
}

interface PinDetailCardThumbnailProps {
  $borderRadius: number | string;
  $thumbnail: string | null;
}

interface PinDetailCardContentProps {
  $borderRadius: number | string;
}

export const PinDetailCardLayout = styled.div<PinDetailCardLayoutProps>`
  position: relative;

  width: 100%;
  aspect-ratio: 390 / 200;
  max-height: 18rem;
  border-radius: ${(props) => `${props.$borderRadius}px`};
`;

export const PinDetailCardWrapper = styled.article<PinDetailCardWrapperProps>`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => `${props.$borderRadius}px`};
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 11px;
`;

export const PinDetailCardThumbnail = styled.div<PinDetailCardThumbnailProps>`
  width: 50%;
  border-top-left-radius: ${(props) => `${props.$borderRadius}px`};
  border-bottom-left-radius: ${(props) => `${props.$borderRadius}px`};
  background-image: ${(props) => `url(${props.$thumbnail})`};
  background-color: ${(props) => props.theme.gray_200};
  background-size: cover;
  background-position: center;

  span {
    display: inline-block;
    padding: 1rem 0 0 1rem;
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;

export const PinDetailCardContent = styled.div<PinDetailCardContentProps>`
  width: 50%;
  padding: 1.5rem;
  border-top-right-radius: ${(props) => `${props.$borderRadius}px`};
  border-bottom-right-radius: ${(props) => `${props.$borderRadius}px`};
  line-height: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
`;
