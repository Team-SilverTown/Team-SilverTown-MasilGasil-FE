import { FineDust, Location } from "@/components/icons";
import * as S from "./MyLocationWeather.styles";
import { Precipitation, WeatherType } from "../../Home.types";

interface MyLocationWeatherProps {
  temperature: string | null;
  weather: React.ReactNode | null;
  precipitation: Precipitation | null;
  address: string;
  pm10: number | null;
}

const FINDDUST_COLOR = {
  좋음: "#0277BD",
  보통: "#0098A6",
  나쁨: "#EF6C00",
  "매우 나쁨": "#C62827",
};

const findDust = (pm10: number | null) => {
  if (!pm10) {
    return;
  }

  if (pm10 >= 0 && pm10 <= 30) {
    return "좋음";
  } else if (pm10 >= 31 && pm10 <= 80) {
    return "보통";
  } else if (pm10 >= 81 && pm10 <= 150) {
    return "나쁨";
  } else if (pm10 > 150) {
    return "매우 나쁨";
  }
};

const MyLocationWeather = ({ temperature, weather, address, pm10 }: MyLocationWeatherProps) => {
  const pm10Value = findDust(pm10);
  return (
    <S.MyLocationWeatherLayout>
      <S.MyLocation>
        {address && (
          <>
            <Location />
            <span>{address}</span>
          </>
        )}
      </S.MyLocation>
      <S.MyWeather $backgroundColor={pm10Value ? FINDDUST_COLOR[pm10Value] : ""}>
        <li className="temperatures">
          {weather && weather}
          {temperature && `${temperature}˚`}
        </li>
        <li className="fineDust">
          {pm10 && (
            <>
              <FineDust />
              미세먼지 {pm10Value}
            </>
          )}
        </li>
      </S.MyWeather>
    </S.MyLocationWeatherLayout>
  );
};

export default MyLocationWeather;
