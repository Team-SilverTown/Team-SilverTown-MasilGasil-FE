import tw from "twin.macro";
import styled from "styled-components";

import { FONT_SIZE, FONT_WEIGHT, MODAL, Z_INDEX } from "@/styles/theme";

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${Z_INDEX.MODAL};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalBackground = styled.div<any>`
  position: absolute;
  background-color: ${(props) => props.theme.transparent_10};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.2px);
  z-index: ${Z_INDEX.MODAL_BACKGROUND};
`;

export const ModalLayoutContainer = styled.div`
  background-color: ${(props) => props.theme.white_100};
  padding-top: ${MODAL.VERTICAL_PADDING}rem;
  padding-bottom: ${MODAL.HORIZONTAL_PADDING}rem;
  padding-left: ${MODAL.HORIZONTAL_PADDING}rem;
  padding-right: ${MODAL.HORIZONTAL_PADDING}rem;
  z-index: ${Z_INDEX.MODAL_LAYOUT};
  position: relative;
  box-shadow: 0 2px 4px -2px ${(props) => props.theme.transparent_10};
  border-radius: 6px;
`;

export const ModalLayoutHeader = styled.section`
  margin-top: ${MODAL.HEADER_MARGIN}rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export const ModalHeaderTitle = styled.span`
  position: relative;
  text-align: center;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: auto;

  display: flex;
  justify-content: center;
  font-size: ${FONT_SIZE.H4};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const ModalHeaderButton = styled.button`
  ${tw`transition ease-in-out duration-150 absolute right-0 top-0 m-6`}
`;

export const ModalContentWrapper = styled.section`
  ${tw`outline-none h-full overflow-y-scroll scrollbar-hide`}
`;
