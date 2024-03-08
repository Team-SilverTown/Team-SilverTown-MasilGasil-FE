import { FONT_SIZE, FONT_WEIGHT, Z_INDEX } from "@/styles/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MateMenuLayout = styled.div`
  width: 2.6rem;
  height: 2.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;
`;

export const MateDropDownMenuLayout = styled(motion.div)`
  width: 9rem;
  height: 10.6rem;

  position: absolute;
  right: 0.6rem;
  bottom: -12rem;

  z-index: ${Z_INDEX.MATE_TOGGLE_MENU};
`;

export const MateDropDownMenuContainer = styled(motion.ul)`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background_color};
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);

  overflow: hidden;
`;

export const MateDropDownMenuItem = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};

  cursor: pointer;
`;