import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
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
  border-radius: 0.8rem;
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_50};
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
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.green_100};
  border-radius: 0.8rem;
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_50};

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
`;
