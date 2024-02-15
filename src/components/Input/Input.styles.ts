import styled from "styled-components";

export const InputComponent = styled.input<any>`
  width: 100%;
  background-color: ${(props) => props.theme.transparent_30};
  color: ${(props) => props.theme.text_primary_color};
  border-width: 1.4px;
  border-color: transparent;
  line-height: 1rem;
  appearance: none;
  padding: 12px 16px;
  border-radius: 6px;
  box-sizing: border-box;
  caret-color: ${(props) => props.theme.green_500};

  &::placeholder {
    color: ${(props) => props.theme.text_primary_color + 50};
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${(props) => (props.$isInvalid ? props.theme.red_500 : props.theme.green_500)};
  }
  border-color: ${(props) => props.$isInvalid && props.theme.red_500};
`;
