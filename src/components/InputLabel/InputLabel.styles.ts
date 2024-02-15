import styled, { css } from "styled-components";

export const Label = styled.label<{ $position: "start" | "center" | "end" }>`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${({ $position }) => {
    switch ($position) {
      case "start":
        return css`
          justify-content: start;
        `;
      case "center":
        return css`
          justify-content: center;
        `;
      case "end":
        return css`
          justify-content: end;
        `;
    }
  }}
`;

export const Text = styled.span<{ $type: "normal" | "safety" | "warn" | "danger" }>`
  ${({ $type }) => {
    switch ($type) {
      case "danger":
        return css`
          color: ${(props) => props.theme.red_500};
        `;
      case "warn":
        return css`
          color: ${(props) => props.theme.yellow_500};
        `;
      case "safety":
        return css`
          color: ${(props) => props.theme.green_500};
        `;
      default:
        return css`
          color: ${(props) => props.theme.text_primary_color + 50};
        `;
    }
  }};
  font-size: 0.75rem;
`;
