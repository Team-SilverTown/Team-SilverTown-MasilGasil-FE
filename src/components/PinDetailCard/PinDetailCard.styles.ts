"use client";

import { FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

interface PinDetailCardContainerProps {
  width: number;
  height: number;
  borderRadius: number;
}

interface PinDetailCardThumbnailProps {
  width: number;
  borderRadius: number;
  thumbnailURL: string;
}

interface PinDetailCardContentProps {
  width: number;
  borderRadius: number;
}

export const PinDetailCardContainer = styled.div<PinDetailCardContainerProps>`
  display: flex;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => `${props.borderRadius}px`};
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 11px;
`;

export const PinDetailCardThumbnail = styled.div<PinDetailCardThumbnailProps>`
  width: ${(props) => `${props.width / 2}px`};
  border-top-left-radius: ${(props) => `${props.borderRadius}px`};
  border-bottom-left-radius: ${(props) => `${props.borderRadius}px`};
  background-image: ${(props) => `url(${props.thumbnailURL})`};
  background-size: cover;

  span {
    display: inline-block;
    padding: 1rem 0 0 1rem;
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;

export const PinDetailCardContent = styled.div<PinDetailCardContentProps>`
  width: ${(props) => `${props.width / 2}px`};
  padding: 1.5rem;
  border-top-right-radius: ${(props) => `${props.borderRadius}px`};
  border-bottom-right-radius: ${(props) => `${props.borderRadius}px`};
  line-height: 2rem;
  box-sizing: border-box;

  h5 {
    margin-bottom: 1.5rem;
    font-weight: ${FONT_WEIGHT.SEMIBOLD};
  }
`;
