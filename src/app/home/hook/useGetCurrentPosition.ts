import { useEffect, useState } from "react";

interface LocationType {
  lat: number;
  lng: number;
}

const useGetCurrentPosition = () => {
  const [location, setLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  function showYourLocation({ coords }: GeolocationPosition) {
    const lat = coords.latitude;
    const lng = coords.longitude;
    setLocation({
      lat,
      lng,
    });
  }

  function showErrorMsg(error: GeolocationPositionError) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        throw new Error("이 문장은 사용자가 Geolocation API의 사용 요청을 거부했을 때 나타납니다!");
        break;

      case error.POSITION_UNAVAILABLE:
        throw new Error("이 문장은 가져온 위치 정보를 사용할 수 없을 때 나타납니다!");
        break;

      case error.TIMEOUT:
        throw new Error(
          "이 문장은 위치 정보를 가져오기 위한 요청이 허용 시간을 초과했을 때 나타납니다!",
        );
        break;

      default:
        throw new Error("이 문장은 알 수 없는 오류가 발생했을 때 나타납니다!");
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMsg);
  }, []);

  return {
    location,
  };
};

export default useGetCurrentPosition;
