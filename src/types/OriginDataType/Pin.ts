import { GeoJSONPoint, KakaoPosition } from "./GeoJSON";

export interface Pin {
  point: GeoJSONPoint;
  content: string;
  thumbnailUrl: string | null;
}

export interface KakaoFormatPin {
  point: KakaoPosition;
  content: string;
  thumbnailUrl: string | null;
}
