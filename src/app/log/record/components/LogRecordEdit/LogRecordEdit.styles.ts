import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

export const LogEditLayout = styled.div`
  width: 100%;
  height: 100%;
  min-width: 24rem;
  padding: 0rem 2rem 9rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  position: relative;
  overflow-y: auto;
  user-select: none;
`;

export const LogEditContainer = styled.div`
  width: 100%;
`;

export const SizeHandlerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;
`;

export const SizeHandler = styled.div`
  width: 20%;
  height: 1rem;
  border-radius: 10rem;
  background-color: ${(props) => props.theme.gray_100};
`;

export const Header = styled.h1`
  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const LogEditPinList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.gray_300};
`;

export const LogEditPinItem = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const PinIndex = styled.div<{ $backgroundcolor: string }>`
  background-color: ${(props) => props.$backgroundcolor};
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${(props) => props.theme.text_secondary_color};
  flex-shrink: 0;
  border-radius: 50%;
`;

export const SlideButtonContent = styled.div<{ $textColor: string }>`
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  font-size: ${FONT_SIZE.LARGE};
  color: ${({ $textColor }) => $textColor};
`;

export const Image = styled.img<{ $src: string | null }>`
  src: $src;
  width: 100%;
  height: 100%;
`;
