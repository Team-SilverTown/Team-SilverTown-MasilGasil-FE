import { FONT_SIZE } from "@/styles/theme";
import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 1rem 3rem;
  text-align: center;

  font-size: ${FONT_SIZE.MEDIUM};
  color: ${(props) => props.theme.gray_300};
`;
