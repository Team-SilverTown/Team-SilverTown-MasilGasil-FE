import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const DoneLayout = styled.section`
  width: 28rem;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DoneTitle = styled.h6`
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};
  text-align: center;
`;
