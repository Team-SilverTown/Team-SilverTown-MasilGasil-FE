import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

import { motion } from "framer-motion";

export const UserEditLayout = styled(motion.form)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-top: 3rem;
  padding-bottom: 8rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
`;

export const UserEditSectionContainer = styled.article`
  width: 100%;
`;

export const UserEditTitle = styled.h6`
  margin-bottom: 1.6rem;
  padding-left: 0.6rem;

  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};

  user-select: none;
`;

export const UserEditWarning = styled.div`
  width: 100%;
  min-height: 2.8rem;
  padding-left: 0.6rem;

  display: flex;
  align-items: center;
`;

export const UserEditButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 10rem;
`;
