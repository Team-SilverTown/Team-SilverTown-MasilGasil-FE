import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const BorderContainer = styled.div`
  padding: 0rem 1.25rem;
  margin-bottom: 3rem;
  overflow-y: hidden;
`;
export const BorderTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  h3 {
    font-size: ${FONT_SIZE.LARGE};
    font-weight: ${FONT_WEIGHT.SEMIBOLD};
    color: ${(props) => props.theme.black};
  }

  a,
  span {
    font-size: 1.4rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};
    color: ${(props) => props.theme.gray_500};
    cursor: pointer;
  }
`;
export const BorderContentSection = styled.div`
  margin-top: 1.2rem;
  overflow-y: hidden;
`;

export const BorderContentListWrapper = styled.ul`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  & > li:not(:last-child) {
    margin-right: 1.5rem;
  }
  & > li {
    flex-shrink: 0;
  }
`;

export const EmptyAlert = styled.div`
  padding: 4rem;
  margin: 0 auto;
  user-select: none;
  color: ${(props) => props.theme.gray_300};
`;
