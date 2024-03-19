import proj4 from "proj4";

const convertLatLonToTM = (lat: number, lon: number): { x: number; y: number } => {
  const tm =
    "+proj=tmerc +lat_0=38 +lon_0=127 +k=0.9996 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs";

  const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

  const [x, y] = proj4(wgs84, tm, [lon, lat]);

  return { x, y };
};

export default convertLatLonToTM;
