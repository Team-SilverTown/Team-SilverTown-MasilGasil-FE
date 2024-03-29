import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const SettingContent = styled.div`
  width: 100%;
  padding: 0.6rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const SettingLabel = styled.label`
  flex-grow: 1;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  cursor: pointer;
`;

export const SettingText = styled.p`
  flex-grow: 1;

  font-size: ${FONT_SIZE.BASIC};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: nowrap;
`;

export const SettingIcon = styled.i`
  width: 3rem;
  height: 3rem;
  padding: 2px;

  border-radius: 4px;
`;
