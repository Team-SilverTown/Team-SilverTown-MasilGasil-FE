interface Coords {
  lat?: number;
  lng?: number;
  x?: number;
  y?: number;
}

const RE = 6371.00877; // 지구 반경(km)
const GRID = 5.0; // 격자 간격(km)
const SLAT1 = 30.0; // 표준 위도 1
const SLAT2 = 60.0; // 표준 위도 2
let OLON = 126.0; // 기준점 경도
let OLAT = 38.0; // 기준점 위도
let XO = 43; // 기준점 X좌표
let YO = 136; // 기준점 Y좌표

/**
 * 해당 함수는 위도, 경도를 받아 격자 좌표로 변환해주는 함수 입니다.
 * @param code 호출 시 "toXY" 값을 인자로 넘겨준다면 위도와 경도를 받아 격자 좌표로 변환해줍니다.
 * @param lat 경도 값
 * @param lng  위도 값
 * @returns rs라는 격자 좌표로 변환된 값을 반환해줍니다.
 */

const convertLatLonToGrid = (code: string, lat: number, lng: number): Coords => {
  let sn =
    Math.tan(Math.PI * 0.25 + ((SLAT2 * Math.PI) / 180.0) * 0.5) /
    Math.tan(Math.PI * 0.25 + ((SLAT1 * Math.PI) / 180.0) * 0.5);
  sn =
    Math.log(Math.cos((SLAT1 * Math.PI) / 180.0) / Math.cos((SLAT2 * Math.PI) / 180.0)) /
    Math.log(sn);
  let sf = Math.tan(Math.PI * 0.25 + ((SLAT1 * Math.PI) / 180.0) * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos((SLAT1 * Math.PI) / 180.0)) / sn;
  let ro = Math.tan(Math.PI * 0.25 + ((OLAT * Math.PI) / 180.0) * 0.5);
  ro = ((RE / GRID) * sf) / Math.pow(ro, sn);

  let rs: Coords = {};

  if (code == "toXY") {
    rs["lat"] = lat;
    rs["lng"] = lng;
    let ra = Math.tan(Math.PI * 0.25 + lat * (Math.PI / 180.0) * 0.5);
    ra = ((RE / GRID) * sf) / Math.pow(ra, sn);
    let theta = lng * (Math.PI / 180.0) - OLON * (Math.PI / 180.0);
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;
    rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
    rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  }
  return rs;
};

export default convertLatLonToGrid;
