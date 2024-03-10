import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import Sheet from "@/components/BottomSheet/sheet";

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

  background-color: ${(props) => props.theme.background_color};
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

  background-color: ${(props) => props.theme.background_color};
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

export const MotionSheet = styled(Sheet)``;
