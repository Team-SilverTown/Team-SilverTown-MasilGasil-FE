import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const Title = styled.strong`
  display: block;
  font-size: 2rem;
`;

export const GenderSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  margin-top: 3rem;
`;

export const GenderButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.2rem;
  margin: 1.4rem 0;
  color: ${({ theme }) => theme.white};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const BirthDateSection = styled.section`
  margin-top: 3rem;
`;

export const BirthDateTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const PhysicalSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 1.2rem;
`;

export const PhysicalGroup = styled.div`
  width: 50%;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  input[type="number"] {
    -webkit-appearance: none;
    margin: 0;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  } //Input type=number의 기본 우측 화살표 제거
`;

export const UnitLabel = styled.span`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  font-weight: ${FONT_WEIGHT.REGULAR};
`;

export const ExerciseIntensityTitleSection = styled.ul`
  margin: 3rem 0;
`;

export const ExerciseIntensityOptionList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  user-select: none;
`;

export const PolicyLabel = styled.label`
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
