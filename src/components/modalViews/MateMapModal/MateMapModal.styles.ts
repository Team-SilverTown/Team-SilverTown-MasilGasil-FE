import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MapModalLayout = styled.section`
  min-width: 26rem;

  display: flex;
  flex-direction: column;
`;

export const MapModalTitle = styled.h5`
  width: 100%;
  height: 5rem;
  padding-top: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
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
  align-items: center;

  font-size: ${FONT_SIZE.BASIC};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  color: ${({ theme }) => theme.gray_500};
`;
