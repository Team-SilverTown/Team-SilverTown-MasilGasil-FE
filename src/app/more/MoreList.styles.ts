import { FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MoreListLayout = styled.section`
  padding-top: 6rem;
`;

export const MoreListFilter = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  button {
    padding: 0.5rem 0;
    color: #999;

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

export const MoreListContainer = styled.section`
  padding: 0 1.5rem;
`;
