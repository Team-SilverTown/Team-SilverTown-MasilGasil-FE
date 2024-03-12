import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

interface PostMateRecruitProps {
  $isRecruit: boolean;
}

export const PostMateCardLayout = styled.div`
  position: relative;
  width: 100%;
  height: 9rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px;
`;

export const PostMateCardInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: ${FONT_SIZE.MINI};
    font-weight: ${FONT_WEIGHT.MEDIUM};
    margin-left: 0.5rem;
  }
`;

export const PostMateCardContent = styled.div`
  font-size: ${FONT_SIZE.MINI};
  font-weight: ${FONT_WEIGHT.BOLD};
  margin: 0.6rem 1rem 1rem 3.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const PostMateCardDate = styled.div`
  font-size: ${FONT_SIZE.MICRO};
  font-weight: ${FONT_WEIGHT.MEDIUM};
  text-align: right;
  color: ${(props) => props.theme.gray_300};
`;

export const PostMateRecruit = styled.mark<PostMateRecruitProps>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  height: 2rem;
  background-color: ${(props) => (props.$isRecruit ? props.theme.green_500 : props.theme.gray_500)};
  font-size: ${FONT_SIZE.MICRO};
  text-align: center;
  line-height: 2rem;
  color: ${(props) => props.theme.white};
  border-radius: 0.8rem;
`;
