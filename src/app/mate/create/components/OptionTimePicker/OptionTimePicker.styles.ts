import styled from "styled-components";

export const CustomInput = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.transparent_10};
  color: ${(props) =>
    props.isSelected ? props.theme.text_primary_color : props.theme.text_primary_color + 30};

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
    border-color: ${(props) => (props.$isInvalid ? props.theme.red_500 : props.theme.green_500)};
  }
  border-color: ${(props) => props.$isInvalid && props.theme.red_500};
`;
