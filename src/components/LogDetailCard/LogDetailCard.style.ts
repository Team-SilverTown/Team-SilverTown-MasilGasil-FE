"use client";

import { BORDER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

interface LogDetailCardInfoProps {
  $isSettingLayout: boolean;
}

export const LogDetailCardContainer = styled.div`
  display: flex;
  width: 30rem;
  height: 12rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.white};
  cursor: pointer;

  border-width: 1px;
  border-color: ${(props) => props.theme.transparent_10};
`;

export const LogDetailCardThumbnail = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const LogDetailCardInfo = styled.div<LogDetailCardInfoProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 12rem);
  padding: 1rem;

  .infoTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      width: ${(props) => (props.$isSettingLayout ? "calc(100% - 1.5rem)" : "100%")};
      font-size: ${FONT_SIZE.LARGE};
      font-weight: ${FONT_WEIGHT.BOLD};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    svg {
      width: 1rem;
      cursor: pointer;
      transition: background 0.2s;
      &:hover {
        background-color: ${(props) => props.theme.gray_100};
        border-radius: 50%;
      }
    }
  }

  p {
    margin: 1rem 0;
    font-size: ${FONT_SIZE.MINI};
    line-height: 1.5rem;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const LogDetailCardInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const LogDetailCardSettingModal = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1rem;
  content: "";
  width: 11rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0rem 0.2rem 0.8rem 0rem;
  ul {
    li {
      text-align: center;
      font-size: ${FONT_SIZE.MINI};
      transition: background 0.2s;
      &:hover {
        background-color: ${(props) => props.theme.gray_100};
      }
    }

    li button {
      display: block;
      width: 100%;
      padding: 1rem 0;
    }
  }
`;
