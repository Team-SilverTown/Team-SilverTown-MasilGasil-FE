import styled from "styled-components";

export const TextareaStyle = styled.textarea`
  width: 100%;
  padding: 1.5rem 2rem;

  background-color: ${(props) => props.theme.transparent_10};
  border-width: 1.4px;
  border-color: transparent;
  border-radius: 6px;
  box-sizing: border-box;

  color: ${(props) => props.theme.text_primary_color};
  line-height: 1.4;
  caret-color: ${(props) => props.theme.green_500};

  resize: none;
  appearance: none;

  /* overflow: scroll; */

  &::placeholder {
    color: ${(props) => props.theme.text_primary_color + 30};
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${(props) => props.theme.green_500};
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
