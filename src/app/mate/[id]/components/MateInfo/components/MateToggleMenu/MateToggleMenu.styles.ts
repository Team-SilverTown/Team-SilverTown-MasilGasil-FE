import { FONT_SIZE, FONT_WEIGHT, Z_INDEX } from "@/styles/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MateToggleMenuLayout = styled(motion.ul)`
  width: 9rem;
  height: 10.6rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  position: absolute;
  right: 1rem;
  bottom: -10rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background_color};
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
`;

export const MateToggleMenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};

  cursor: pointer;
  z-index: ${Z_INDEX.MATE_TOGGLE_MENU};
`;
