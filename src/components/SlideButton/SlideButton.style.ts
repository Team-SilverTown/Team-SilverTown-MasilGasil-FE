import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonWrapper = styled(motion.div)<any>`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  overflow: "hidden";
  will-change: "transform";
`;

export const MainButton = styled(motion.div)<any>`
  display: flex;
  width: 100%;
  min-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  z-index: 20;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$buttonColor ? props.$buttonColor : props.theme.container_color};
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_50};

  &,
  & > span {
    color: ${(props) => (props.$textColor ? props.$textColor : props.theme.text_primary_color)};
    font-weight: 600;
  }
`;

export const SubButton = styled(motion.div)<any>`
  position: absolute;
  display: grid;
  place-content: center;
  right: 0px;
  width: ${(props) => props.$width}px;
  height: 100%;
  border-radius: 8px;
  z-index: 10;
  background-color: ${(props) =>
    props.$subButtonColor ? props.$subButtonColor : props.theme.red_500};
  cursor: pointer;

  &,
  & > span {
    color: ${(props) =>
      props.$subTextColor ? props.$subTextColor : props.theme.text_secondary_color};
    font-weight: 600;
  }
`;
