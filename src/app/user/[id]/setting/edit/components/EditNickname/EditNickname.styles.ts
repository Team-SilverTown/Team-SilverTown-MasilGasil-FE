import { DISPLAY_NONE_SCROLLBAR } from "@/styles/theme";
import styled from "styled-components";

export const EditNickNameContainer = styled.div`
  width: 100%;
`;

export const EditNicknameActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EditNicknameWarningWrapper = styled.div`
  width: 100%;
  height: 2.4rem;
  padding-left: 0.6rem;

  display: flex;
  align-items: center;

  white-space: nowrap;

  overflow: scroll;

  ${DISPLAY_NONE_SCROLLBAR}
`;
