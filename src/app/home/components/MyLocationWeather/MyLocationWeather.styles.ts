import { FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

interface MyWeatherProps {
  $backgroundColor: string;
}

export const MyLocationWeatherLayout = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const MyLocation = styled.div`
  display: flex;

  svg {
    margin-right: 0.5rem;
  }
`;

export const MyWeather = styled.ul<MyWeatherProps>`
  display: flex;
  list-style: none;
  font-weight: ${FONT_WEIGHT.BOLD};

  li {
    display: flex;
    align-items: center;
  }

  li svg {
    margin-right: 0.5rem;
    stroke: ${(props) => props.theme.gray_200};
  }

  li.temperatures {
    margin-right: 1rem;
    color: ${(props) => props.theme.yellow_500};
  }

  li.fineDust {
    color: ${(props) => props.theme.green_500};

    svg {
      fill: ${(props) => props.$backgroundColor};
    }
  }
`;
