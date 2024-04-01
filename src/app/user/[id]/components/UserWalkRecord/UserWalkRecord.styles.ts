"use client";

import { BORDER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 0rem 1.25rem;
`;

export const Container = styled.div`
  padding: 2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.white};
  border-width: ${BORDER.TINE_WIDTH}px;
  border-color: ${(props) => props.theme.transparent_10};
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 1.4rem;
  padding: 0rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderText = styled.span``;

export const Text = styled.span`
  @media (max-width: 415px) {
    font-size: ${FONT_SIZE.MINI};
  }
`;

export const AccentText = styled.span`
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: ${FONT_SIZE.LARGE};
  color: ${({ theme }) => theme.green_300};
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 400px) {
    gap: 2rem;
  }

  @media (min-width: 500px) {
    gap: 4rem;
  }
`;

export const SectionItem = styled.div`
  padding: 1rem 0rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 5rem;

  font-weight: ${FONT_WEIGHT.BOLD};

  @media (min-width: 500px) {
    min-width: 8rem;
  }
`;

export const ColDivider = styled.div`
  width: 1px;
  height: 4rem;
  background-color: ${(props) => props.theme.gray_100};

  @media (max-width: 375px) {
    width: 25rem;
    height: 1px;
  }
`;
