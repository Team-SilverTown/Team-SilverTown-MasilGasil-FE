import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

import { motion } from "framer-motion";

export const Tab = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
`;

export const TabContent = styled.span<any>`
  position: relative;
  z-index: 10;

  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  font-size: ${FONT_SIZE.MEDIUM};
  color: ${(props) =>
    props.$isFocused ? props.theme.text_secondary_color : props.theme.transparent_50};
`;

export const TabActive = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.green_500};
`;
