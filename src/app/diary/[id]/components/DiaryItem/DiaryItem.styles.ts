import { BORDER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

// export const Layout = styled.div`
//   width: 100%;
//   height: 10rem;
//   background-color: white;
//   display: flex;
//   border-radius: 1rem;
//   margin-bottom: 0.5rem;

//   border-width: ${BORDER.TINE_WIDTH}px;
//   border-color: ${(props) => props.theme.transparent_10};
// `;

// export const ContentContainer = styled.div`
//   width: 75%;
//   height: 100%;
//   padding: 1rem 1.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: start;
//   gap: 1rem;
// `;

// export const Title = styled.p`
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   font-size: ${FONT_SIZE.H6};
//   font-weight: ${FONT_WEIGHT.BOLD};
// `;

// export const SubText = styled.p`
//   color: ${(props) => props.theme.gray_500};

//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
