import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const PinDetailModalLayout = styled.section`
  width: 26rem;
  padding: 3rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  user-select: none;
`;

export const PinDetailEmptyThumbnail = styled.div`
  width: 25rem;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: ${({ theme }) => theme.gray_200};
  border-radius: 0.8rem;

  overflow: hidden;
`;

export const PinDetailContentContainer = styled.div`
  width: 25rem;

  display: flex;
  flex-direction: column;
`;

export const PinDetailContent = styled.p`
  width: 100%;

  font-size: ${FONT_SIZE.BASIC};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  line-height: 1.3;
`;

export const PinDetailTitle = styled.span`
  width: 100%;
  margin-bottom: 1rem;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;
