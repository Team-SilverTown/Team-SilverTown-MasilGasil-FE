import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const LogMemoLocation = styled.article`
  display: flex;
  align-items: center;
  font-weight: ${FONT_WEIGHT.MEDIUM};

  svg {
    margin-right: 0.5rem;
  }
`;

export const LogMemoWalkInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 2.8rem;

  li {
    flex: 1;
    text-align: center;

    strong {
      padding: 0.5rem 1rem;
      font-size: ${FONT_SIZE.MINI};
      font-weight: ${FONT_WEIGHT.REGULAR};
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.green_500};
      border-radius: 2rem;
    }

    span {
      margin-top: 1.5rem;
      display: block;
    }
  }
`;

export const LogMemoContent = styled.article`
  font-size: ${FONT_SIZE.MINI};
  line-height: 1.6;
`;

export const LogMemoDate = styled.article`
  margin-top: 2rem;
  text-align: right;
  font-size: ${FONT_SIZE.MINI};
  color: ${(props) => props.theme.gray_300};
`;
