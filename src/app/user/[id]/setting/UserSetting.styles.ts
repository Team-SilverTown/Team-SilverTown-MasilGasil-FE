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

  /* border: 1px solid red; */
`;

export const UserSettingInnerLayout = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const UserSettingContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserSettingTitle = styled.h5`
  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const UserSettingText = styled.p`
  flex-grow: 1;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  letter-spacing: 1px;
  line-height: 1.2;
`;

export const UserSettingIcon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
`;

export const UserSettingDivideLine = styled.div`
  width: 100%;
  height: 2px;

  background-color: ${({ theme }) => theme.gray_200};
  border-radius: 2px;
`;
