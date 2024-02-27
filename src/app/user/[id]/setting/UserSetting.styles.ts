import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const UserSettingLayout = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  user-select: none;
`;

export const UserSettingInnerLayout = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const UserSettingTitle = styled.h6`
  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const UserSettingDivideLine = styled.div`
  width: 100%;
  height: 2px;

  background-color: ${({ theme }) => theme.gray_200};
  border-radius: 2px;
`;
