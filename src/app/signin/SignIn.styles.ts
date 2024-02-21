import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const GenderSection = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: 2rem;
  margin-top: 3rem;
`;

export const GenderTitle = styled.span``;

export const GenderButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.2rem;
  margin: 1.4rem 0;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

export const BirthDateSection = styled.section`
  margin-top: 3rem;
`;

export const BirthDateTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const BirthDateTitle = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: ${FONT_WEIGHT.BOLD};
  width: 4.5rem;
`;

export const PhysicalSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 1.2rem;
`;

export const Group = styled.div`
  width: 50%;
`;

export const GroupTitle = styled.span`
  font-size: 2rem;
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const ExerciseIntensityTitleSection = styled.section`
  margin: 3rem 0;
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const ExerciseIntensityOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin: 1.6rem 1.2rem;
`;

export const RadioCircle = styled.label`
  cursor: "pointer";
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
