import { CONTAINER, DISPLAY_NONE_SCROLLBAR, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const PostCreateLayout = styled.section`
  height: 100%;
  width: 100%;

  position: relative;
`;

export const PostCreateMapWrapper = styled.article`
  width: 100%;
  height: 45%;

  position: relative;
  z-index: 0;
`;

export const PostCreateSheet = styled.article<{ $isOpen: boolean }>`
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? "88%" : "55.5%")};

  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;

  background-color: ${({ theme }) => theme.background_color};
  box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.3);
  border-top-right-radius: 0.8rem;
  border-top-left-radius: 0.8rem;

  transition: all 0.3s ease-in-out;
  z-index: 1;
  overflow: hidden;
`;

export const PostCreateSheetHeader = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const PostCreateSheetContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  overflow: hidden;
`;

export const PostCreateSheetContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 0rem ${CONTAINER.PADDING_HORIZONTAL}rem;
  padding-top: 1rem;
  padding-bottom: 8rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow: scroll;
  ${DISPLAY_NONE_SCROLLBAR}
`;

export const PostCreateButtonWrapper = styled.div`
  width: 100%;
  padding: 0rem ${CONTAINER.PADDING_HORIZONTAL}rem;

  position: absolute;
  bottom: 1rem;

  opacity: 0.9;

  z-index: 2;
`;

export const PostCreateContentTitle = styled.h6`
  width: 100%;
  margin-bottom: 1rem;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;
