import tw from "twin.macro";
import styled from "styled-components";

import { MODAL, Z_INDEX } from "@/styles/theme";

export const ModalContainer = styled.div`
  z-index: ${Z_INDEX.MODAL};
  ${tw`fixed flex items-center inset-0 justify-center`}
`;

export const ModalBackground = styled.div<any>`
  z-index: ${Z_INDEX.MODAL_BACKGROUND};

  ${tw`fixed bg-black bg-opacity-10 flex items-center inset-0 justify-center backdrop-blur-[1.2px]`}
`;

export const ModalLayoutContainer = styled.div`
  background-color: ${(props) => props.theme.white_100};
  padding-top: ${MODAL.VERTICAL_PADDING}rem;
  padding-bottom: ${MODAL.HORIZONTAL_PADDING}rem;
  padding-left: ${MODAL.HORIZONTAL_PADDING}rem;
  padding-right: ${MODAL.HORIZONTAL_PADDING}rem;
  z-index: ${Z_INDEX.MODAL_LAYOUT};

  ${tw`relative shadow-md rounded-md`}
`;

export const ModalLayoutHeader = styled.section`
  margin-top: ${MODAL.HEADER_MARGIN}rem;
  ${tw`absolute left-0 top-0 w-full`}
`;

export const ModalHeaderTitle = styled.span`
  ${tw`relative text-center w-[70%] truncate m-auto text-lg font-semibold`}
`;

export const ModalHeaderButton = styled.button`
  ${tw`transition ease-in-out duration-150 absolute right-0 top-0 m-6`}
`;

export const ModalContentWrapper = styled.section`
  ${tw`outline-none h-full overflow-y-scroll scrollbar-hide`}
`;
