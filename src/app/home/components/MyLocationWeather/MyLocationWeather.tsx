import { NotificationActive, NotificationOff, Location } from "@/components/icons";
import * as S from "./MyLocationWeather.styles";

interface MyLocationWeatherProps {
  temperature: number | null;
  weather: string | null;
  precipitation: string | null;
}

const MyLocationWeather = ({ temperature, weather, precipitation }: MyLocationWeatherProps) => {
  console.log(temperature, weather, precipitation);
  return (
    <S.MyLocationWeatherLayout>
      <S.MyLocation>
        <Location />
        <span>진주시 호탄동</span>
      </S.MyLocation>
      <S.MyWeather>
        <li className="temperatures">
          {weather} {temperature}˚
        </li>
        <li className="fineDust">미세먼지 나쁨</li>
      </S.MyWeather>
    </S.MyLocationWeatherLayout>
  );
};

export default MyLocationWeather;
