import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MyWalkRecordContainer = styled.article`
  padding: 2.3rem 1.5rem;
  margin-bottom: 3rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 11px;

  h3 {
    padding-bottom: 3.5rem;
    font-size: ${FONT_SIZE.MEDIUM};
    font-weight: ${FONT_WEIGHT.BOLD};
    text-align: center;
  }
`;

export const MyWalkRecordList = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  li:not(:first-child) {
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: inline-block;
      width: 0.1rem;
      height: 100%;
      background-color: ${(props) => props.theme.gray_100};
    }
  }

  li strong {
    margin-bottom: 1rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};
  }

  li span {
    font-size: ${FONT_SIZE.LARGE};
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${(props) => props.theme.green_500};
  }
`;
