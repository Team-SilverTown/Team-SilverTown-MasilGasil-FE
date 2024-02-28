import styled from "styled-components";

import { CONTAINER, NAV_HEIGHT, Z_INDEX } from "@/styles/theme";

export const SearchBarContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: start;
  width: 100%;
  padding-left: ${CONTAINER.PADDING_HORIZONTAL}rem;
  padding-right: ${CONTAINER.PADDING_HORIZONTAL}rem;
  height: ${NAV_HEIGHT}rem;
  z-index: ${Z_INDEX.SEARCH_BAR};
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchIconWrapper = styled.i`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

export const CrossIconWrapper = styled.i`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1rem;
  display: flex;
  align-items: center;
`;

export const CrossButton = styled.button`
  background-color: ${(props) => props.theme.text_primary_color + 30};

  &:hover {
    background-color: ${(props) => props.theme.text_primary_color + 60};
  }

  padding: 0.25rem;
  border-radius: 9999px;
`;
