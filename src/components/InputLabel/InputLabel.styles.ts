import styled, { css } from "styled-components";

export const Label = styled.label<{ $position: "start" | "center" | "end" }>`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${({ $position }) => {
    if ($position === "start") {
      return css`
        justify-content: start;
      `;
    } else if ($position === "center") {
      return css`
        justify-content: center;
      `;
    } else {
      return css`
        justify-content: end;
      `;
    }
  }};
`;

export const Text = styled.span<{ $type: "normal" | "safety" | "warn" | "danger" }>`
  ${({ $type }) => {
    if ($type === "safety") {
      return css`
        color: ${(props) => props.theme.green_500};
      `;
    } else if ($type === "warn") {
      return css`
        color: ${(props) => props.theme.yellow_500};
      `;
    } else if ($type === "danger") {
      return css`
        color: ${(props) => props.theme.red_500};
      `;
    } else {
      return css`
        color: ${(props) => props.theme.text_primary_color + 50};
      `;
    }
  }};
  font-size: 0.75rem;
`;
