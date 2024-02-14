export interface KakaoPosition {
  lat: number;
  lng: number;
}

export type Position = [number, number];

export interface GeoJSONPoint {
  type: "Point";
  coordinates: Position;
}

export interface GeoJSONLineString {
  type: "LineString";
  coordinates: Position[];
}
