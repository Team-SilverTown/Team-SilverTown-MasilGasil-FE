import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const PostThumbnailWrapper = styled.div`
  width: 100%;
  min-height: 28rem;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.gray_100};
  border-radius: 0.8rem;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.gray_500};
  line-height: 2.2;

  user-select: none;
`;
