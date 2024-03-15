import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const MemberItemLayout = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MemberNickName = styled.p`
  flex-grow: 1;

  font-size: ${FONT_SIZE.BASIC};
  font-weight: ${FONT_WEIGHT.MEDIUM};
`;
