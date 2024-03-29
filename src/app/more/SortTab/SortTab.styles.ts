import styled from "styled-components";
import { FONT_WEIGHT } from "@/styles/theme";

export const MoreListSort = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  button {
    padding: 0.5rem 0;
    color: ${(props) => props.theme.gray_500};

    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  button:first-child {
    padding-right: 1.5rem;
  }

  button.selected {
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${(props) => props.theme.black};
  }
`;
