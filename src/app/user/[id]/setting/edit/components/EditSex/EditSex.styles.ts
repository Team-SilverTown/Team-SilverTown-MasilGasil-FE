import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const EditSexContainer = styled.div`
  width: 100%;

  border: 1px solid red;
`;

export const EditSexActions = styled.div`
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
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.green_500 : theme.transparent_10};

  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};
  letter-spacing: 1px;
  white-space: nowrap;
  color: ${({ theme }) => theme.text_secondary_color};

  user-select: none;
  cursor: pointer;
`;
