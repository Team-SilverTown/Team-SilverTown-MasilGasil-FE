"use client";

import { HomeWeatherSkeleton } from "@/components/skeletons";

import StatusItem from "./components/StatusItem/StatusItem";
import useStatusContainer from "./hook/useStatusContainer/useStatusContainer";
import { evaluatePineDust } from "./utils";

const WEATHER_ICON = {
  맑음: "☀️",
  구름조금: "🌤️",
  흐림: "☁️",
  비: "🌧️",
  진눈개비: "🌨️",
  눈: "☃️",
  없음: null,
};

const StatusContainer = () => {
  const { isClient, isLoading, userAddress, weatherData } = useStatusContainer();

  if (!isClient || isLoading) {
    return <HomeWeatherSkeleton />;
  }

  const { precipitation, weather, pm10, temperature } = weatherData;

  const weatherIcon =
    precipitation && weather ? WEATHER_ICON[precipitation] || WEATHER_ICON[weather] : null;
  const fineDustValue = evaluatePineDust(pm10);

  return (
    <article
      className={`z-10 flex grow-0 flex-nowrap items-center justify-between overflow-hidden text-ellipsis px-4`}
    >
      <section className="flex-1 flex-nowrap truncate">
        <StatusItem
          icon="📍"
          label={`${userAddress.depth2} ${userAddress.depth3}`}
        />
      </section>

      <section className="flex items-center gap-3">
        {temperature && (
          <>
            <StatusItem
              icon="🌡️"
              label={`${temperature}°C`}
            />
            <div className="h-2 w-2 rounded-full bg-gray-200" />
          </>
        )}

        {weather && (
          <>
            <StatusItem
              icon={weatherIcon}
              label={weather?.toString()}
            />
            <div className="h-2 w-2 rounded-full bg-gray-200" />
          </>
        )}

        {fineDustValue && (
          <StatusItem
            icon="😷"
            label={fineDustValue}
          />
        )}
      </section>
    </article>
  );
};

export default StatusContainer;
