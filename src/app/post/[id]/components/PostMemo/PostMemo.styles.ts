import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const PostMemoTitle = styled.h3`
  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};
  margin-bottom: 1.5rem;

  @media (max-width: 380px) {
    font-size: ${FONT_SIZE.LARGE};
  }
`;

export const PostMemoInfo = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const PostMemoProfile = styled.article`
  display: flex;
  align-items: center;

  span {
    font-weight: ${FONT_WEIGHT.BOLD};
    margin-left: 0.5rem;
  }
`;

export const PostMemoLocation = styled.article`
  display: flex;
  align-items: center;
  font-weight: ${FONT_WEIGHT.MEDIUM};

  svg {
    margin-right: 0.5rem;
  }
`;

export const PostMemoWalkInfo = styled.ul`
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

export const PostMemoContent = styled.article`
  font-size: ${FONT_SIZE.BASIC};
  line-height: 1.6;
`;

export const PostMemoDate = styled.article`
  margin-top: 2rem;
  text-align: right;
  font-size: ${FONT_SIZE.MINI};
  color: ${(props) => props.theme.gray_300};
`;
