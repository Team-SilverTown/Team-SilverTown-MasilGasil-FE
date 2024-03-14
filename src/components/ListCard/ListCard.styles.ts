"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

interface ListCardThumbnailProps {
  thumbnailURL: string;
  isRecruit: boolean;
  isLiked: boolean;
  likeCount: number;
}

export const ListCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0.1rem 0.1rem 1.1rem;
  cursor: pointer;
`;

export const ListCardThumbnail = styled.div<ListCardThumbnailProps>`
  height: 16rem;
  background-image: ${(props) => `url(${props.thumbnailURL})`};
  background-size: cover;
  background-position: center;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;

  .topInfoSection {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;

    .recruit {
      padding: 0.5rem;
      font-size: ${FONT_SIZE.MICRO};
      font-weight: ${FONT_WEIGHT.MEDIUM};
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.green_500};
    }

    .like {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;

      svg {
        stroke: ${(props) => (props.isLiked ? props.theme.pink_100 : props.theme.black)};
        fill: ${(props) => props.isLiked && props.theme.pink_100};
        transition: all 0.1s;
      }

      span {
        position: absolute;
        bottom: -1.2rem;
        left: 50%;
        transform: translateX(-50%);
        display: inline-block;
        font-size: ${FONT_SIZE.MICRO};
        color: ${(props) => (props.isLiked ? props.theme.pink_100 : props.theme.black)};
        transition: all 0.1s;
      }

      &:hover {
        svg {
          stroke: ${(props) => !props.isLiked && props.theme.pink_100};
          fill: ${(props) => props.theme.pink_100};
        }

        span {
          color: ${(props) => props.theme.pink_100};
        }
      }
    }

    span {
      border-radius: 0.5rem;
    }
  }
`;

export const ListCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.white};
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  .contentTitleWrapper {
    width: calc(100% - 12rem);

    h3 {
      margin-bottom: 1.5rem;
      font-size: ${FONT_SIZE.H5};
      font-weight: ${FONT_WEIGHT.BOLD};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    h5 {
      font-size: ${FONT_SIZE.BASIC};
      font-weight: ${FONT_WEIGHT.MEDIUM};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .contentInfoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    strong {
      display: block;
      font-size: ${FONT_SIZE.BASIC};
      font-weight: ${FONT_WEIGHT.MEDIUM};
      text-align: right;
    }

    ul {
      display: flex;
      justify-content: flex-end;

      li {
        font-size: ${FONT_SIZE.MINI};
      }

      li:not(:last-child) {
        position: relative;
        margin-right: 1rem;

        &::after {
          position: absolute;
          right: -0.6rem;
          top: 50%;
          transform: translateY(-50%);
          content: "";
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme.black};
        }
      }
    }
  }
`;
