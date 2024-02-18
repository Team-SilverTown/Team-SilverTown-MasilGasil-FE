import { styled } from "twin.macro";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

export const PinEditLayout = styled.div`
  width: 28rem;
  height: 80%;
  margin: 3rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  overflow-y: auto;
  user-select: none;
`;

export const PinEditContainer = styled.div``;

export const PinEditThumbnail = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${(props) => props.theme.gray_100};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  color: ${(props) => props.theme.gray_300};
  position: relative;
`;

export const Header = styled.h1`
  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const Image = styled.img<{ $src: string }>`
  src: $src;
  width: 100%;
  height: 100%;
`;
