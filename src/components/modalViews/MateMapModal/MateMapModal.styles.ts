import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MapModalLayout = styled.section`
  min-width: 26rem;

  display: flex;
  flex-direction: column;
`;

export const MapWrapper = styled.article`
  width: 100%;
  height: 26rem;
  margin-bottom: 0.4rem;

  border-radius: 1rem;
  border: 1px ${({ theme }) => theme.green_500} solid;
`;

export const LocationAddress = styled.p`
  width: 100%;
  height: 2.4rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: flex-end;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.gray_500};
`;
