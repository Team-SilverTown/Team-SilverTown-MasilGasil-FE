import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const GenderSection = styled.div`
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: 2rem;
  margin-top: 2.5rem;
`;

export const GenderTitle = styled.span``;

export const GenderButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.2rem;
  margin: 1.4rem 0;
  color: ${({ theme }) => theme.white};
`;

export const PolicyLable = styled.label`
  margin-left: 1rem;
  cursor: pointer;
`;

export const PolicyH2 = styled.h2`
  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
`;

export const PolicyText = styled.span`
  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.REGULAR};
`;

export const PolicySeeMoreText = styled.span`
  color: ${(props) => props.theme.gray_300};
  text-decoration: underline;
  text-underline-offset: 3;
  font-size: ${FONT_SIZE.SMALL};
`;
