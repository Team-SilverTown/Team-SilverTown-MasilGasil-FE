import { BORDER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 10rem;
  background-color: white;
  display: flex;

  border-width: ${BORDER.TINE_WIDTH}px;
  border-color: ${(props) => props.theme.transparent_10};
`;

export const ThumbnailContainer = styled.div`
  width: 25%;
  height: 100%;

  background-color: lightblue;
  flex-shrink: 0;
`;
export const ContentContainer = styled.div`
  width: 75%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  gap: 1rem;
`;

export const Title = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;
export const SubTitle = styled.p``;

export const Text = styled.p``;
export const SubText = styled.p``;

export const TextContainer = styled.div``;
