import { BORDER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const LogRecordActionLayout = styled.div`
  width: 100%;
  max-width: 36rem;
  min-width: 24rem;
  padding-bottom: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: end;

  opacity: 0.9;
  user-select: none;
`;

export const LogRecordActionContainer = styled.div`
  width: 100%;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.white};
  border-width: ${BORDER.TINE_WIDTH}px;
  border-color: ${(props) => props.theme.transparent_10};
  border-radius: 8px;

  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_10};
`;

export const LogRecordInfoContainer = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const LogRecordInfo = styled.p`
  width: calc(50% - 0.8rem);
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  background-color: ${({ theme }) => theme.green_100};
  border-radius: 0.8rem;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const LogRecordInfoUnit = styled.p`
  color: ${({ theme }) => theme.gray_500};
  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.BOLD};
`;
