"use client";

import styled from "styled-components";

export const ListCardShimmer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 3rem 3rem #e0e0e0;
  animation: loading 2s infinite;
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;

export const ListCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
  margin: 2rem 0;
  border-radius: 0.8rem;
  overflow-x: visible;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0.1rem 0.1rem 1.1rem;
`;

export const ListCardThumbnail = styled.article`
  width: 100%;
  height: 16rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.gray_100};
`;

export const ListCardContent = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
`;

export const ListCardContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ListCardInfo = styled.div`
  width: 12rem;
  height: 2rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.gray_100};
`;
