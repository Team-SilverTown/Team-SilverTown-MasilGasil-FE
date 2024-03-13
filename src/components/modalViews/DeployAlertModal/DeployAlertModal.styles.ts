import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const DeployAlertLayout = styled.section`
  width: 24rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeployAlertMessage = styled.h6`
  width: 100%;
  margin-bottom: 3rem;

  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};

  display: flex;
  align-items: center;
  justify-content: center;
`;
