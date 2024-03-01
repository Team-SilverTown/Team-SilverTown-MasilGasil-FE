import { FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

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

export const MyWeather = styled.ul`
  display: flex;
  list-style: none;
  font-weight: ${FONT_WEIGHT.BOLD};

  li.temperatures {
    margin-right: 1rem;
    color: ${(props) => props.theme.yellow_500};
  }

  li.fineDust {
    color: ${(props) => props.theme.green_500};
  }
`;
