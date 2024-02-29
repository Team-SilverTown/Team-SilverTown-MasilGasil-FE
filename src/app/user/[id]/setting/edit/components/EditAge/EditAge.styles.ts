import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const EditAgeContainer = styled.div`
  width: 100%;

  border: 1px solid red;
`;

export const EditAgeActions = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InputRadioLabel = styled.label<{ $isSelected: boolean }>`
  padding: 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
  letter-spacing: 1px;
  white-space: nowrap;

  user-select: none;

  border: 1px solid red;
`;
