import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const UserEditLayout = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const UserEditTitle = styled.h6`
  margin-bottom: 1.6rem;
  padding-left: 0.6rem;

  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};

  user-select: none;
`;
