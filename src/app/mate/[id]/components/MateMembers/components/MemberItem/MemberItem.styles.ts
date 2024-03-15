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

export const MemberAction = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MemberButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;

  p {
    padding: 0.3rem 0.8rem;
    font-size: ${FONT_SIZE.BASIC};
    font-weight: ${FONT_WEIGHT.MEDIUM};
  }

  div {
    width: 0%;
    height: 0.1rem;

    background-color: black;
    border-radius: 0.8rem;

    transition: all 0.3s;
    opacity: 0;
  }

  &:hover div {
    width: 100%;
    opacity: 1;
  }
`;
