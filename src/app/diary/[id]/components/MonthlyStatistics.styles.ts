import styled from "styled-components";
import { BORDER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import Divider from "@/components/Divider/Divider";

export const Layout = styled.div`
  width: 100%;
  padding: 1.25rem;
`;

export const Container = styled.div`
  padding: 2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.white};
  border-width: ${BORDER.TINE_WIDTH}px;
  border-color: ${(props) => props.theme.transparent_10};
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_10};
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const Text = styled.span``;

export const AccentText = styled.span`
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${(props) => props.theme.green_300};
`;

export const AccentTitle = styled.span`
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${(props) => props.theme.green_300};
  font-size: ${FONT_SIZE.LARGE};
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const SectionItem = styled.div`
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: ${FONT_WEIGHT.BOLD};

  @media (min-width: 700px) {
    padding: 1rem 3rem;
  }
`;

export const ColDivider = styled.div`
  width: 1px;
  height: 3rem;
  background-color: ${(props) => props.theme.gray_100};

  @media (max-width: 375px) {
    width: 3rem;
    height: 1px;
  }
`;
