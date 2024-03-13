import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 1rem 3rem;
  text-align: center;
  font-size: ${FONT_SIZE.MEDIUM};
  color: ${(props) => props.theme.gray_300};
  height: 100%;
  overflow-y: auto;
  padding-bottom: 8rem;
`;

export const HeaderContainer = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${(props) => props.theme.gray_300};
`;

export const SubText = styled.span`
  color: ${(props) => props.theme.gray_300};
  cursor: pointer;
  text-decoration: underline;
`;
