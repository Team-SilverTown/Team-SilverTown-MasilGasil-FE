import styled from "styled-components";

export const MateCreateContainer = styled.div``;

export const Title = styled.strong`
  display: block;
  font-size: 2rem;
  margin-bottom: 1.4rem;
`;

export const Section = styled.section`
  margin-top: 3rem;
  width: 100%;
`;
export const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
  gap: 2rem;
`;

export const PersonnelSelect = styled.select<{ $isSelected: boolean }>`
  width: 100%;
  height: 5.2rem;
  background-color: ${(props) => props.theme.transparent_10};
  color: ${(props) =>
    props.$isSelected ? props.theme.text_primary_color : props.theme.text_primary_color + 30};
  text-align: left;
  border-width: 1.4px;
  border-color: transparent;
  line-height: 1rem;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1.5rem;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${(props) => props.theme.green_500};
  }
`;
