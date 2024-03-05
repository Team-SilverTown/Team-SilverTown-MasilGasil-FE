import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

interface LogSimpleCardProps {
  $width: string;
  $height: string;
  $thumbnailUrl: string | null;
  $radius: string;
}

export const LogSimpleCardContainer = styled.div<LogSimpleCardProps>`
  position: relative;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$radius};
  background-image: ${(props) => (props.$thumbnailUrl ? `url(${props.$thumbnailUrl})` : "")};
  background-position: center;
  background-size: cover;
  box-shadow: inset gray 0px -50px 50px -12px;
  cursor: pointer;
`;

export const LogSimpleCardBottom = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem;

  & > strong {
    font-size: ${FONT_SIZE.MINI};
    color: ${({ theme }) => theme.white};
    max-width: 8rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const LogSimpleCardInfo = styled.div`
  ul {
    position: absolute;
    top: -0.5rem;
    right: 0.5rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  ul li {
    font-size: ${FONT_SIZE.MICRO};
    font-weight: ${FONT_WEIGHT.SEMIBOLD};
    color: ${({ theme }) => theme.white};
  }
  ul li:first-child {
    position: relative;
    margin-right: 0.5rem;
    &::after {
      position: absolute;
      right: -0.35rem;
      top: 50%;
      transform: translateY(-50%);
      content: "";
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.white};
    }
  }
  strong {
    font-size: ${FONT_SIZE.MICRO};
    color: ${({ theme }) => theme.white};
  }
`;
