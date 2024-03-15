const showErrorMessage = (error: GeolocationPositionError) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      throw new Error("이 문장은 사용자가 Geolocation API의 사용 요청을 거부했을 때 나타납니다!");

    case error.POSITION_UNAVAILABLE:
      throw new Error("이 문장은 가져온 위치 정보를 사용할 수 없을 때 나타납니다!");

    case error.TIMEOUT:
      throw new Error(
        "이 문장은 위치 정보를 가져오기 위한 요청이 허용 시간을 초과했을 때 나타납니다!",
      );

    default:
      throw new Error("이 문장은 알 수 없는 오류가 발생했을 때 나타납니다!");
  }
};

export default showErrorMessage;
