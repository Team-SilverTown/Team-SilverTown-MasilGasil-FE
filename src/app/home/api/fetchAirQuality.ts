const fetchAirQuality = async (stationName: string) => {
  const AIR_QUALITY_URL = process.env.NEXT_PUBLIC_AIR_QUALITY_URL;
  const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;

  const URL = `${AIR_QUALITY_URL}?stationName=${encodeURIComponent(stationName)}&dataTerm=DAILY&pageNo=1&numOfRows=1&returnType=json&serviceKey=${SERVICE_KEY}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
    }

    const data = await response.json();

    if (data.response.body.items.length > 0) {
      const airQualityData = data.response.body.items[0];

      return { pm10: Number(airQualityData.pm10Value) };
    } else {
      throw new Error("해당 측정소의 미세먼지 정보가 없습니다.");
    }
  } catch (error) {}
};

export default fetchAirQuality;
