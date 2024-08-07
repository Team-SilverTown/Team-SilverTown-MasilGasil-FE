import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const RecordDoneLayout = styled.div`
  width: 28rem;
  height: 80%;
  margin: 3rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  user-select: none;
`;

export const HeaderTitle = styled.span`
  font-size: ${FONT_SIZE.H4};
  font-weight: ${FONT_WEIGHT.BOLD};
  text-align: center;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: ${FONT_SIZE.MEDIUM};

  display: flex;
  justify-content: center;
`;

export const RecordDoneContainer = styled.div``;

export const RecordSummaryContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  user-select: none;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.gray_100};
`;

export const RecordSummaryItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const RecordSummaryCount = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 1rem;

  font-size: ${FONT_SIZE.H4};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const RecordSummaryUnit = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
