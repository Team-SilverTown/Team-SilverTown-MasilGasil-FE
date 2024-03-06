import { CONTAINER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const PostTextEditButtonWrapper = styled.div`
  width: 100%;
  padding: 0rem ${CONTAINER.PADDING_HORIZONTAL}rem;

  position: absolute;
  bottom: 1rem;
`;

export const PostTextEditTitleContainer = styled.div`
  width: 100%;

  border: 1px solid red;
`;

export const PostTextEditInputTitle = styled.h6`
  width: 100%;
  margin-bottom: 1rem;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const PostTextEditWarning = styled.p`
  width: 100%;
  height: 2.4rem;

  display: flex;
  align-items: center;
`;
