import { GeoJSONPoint, KakaoFormatPosition } from "./GeoJSON";

export interface Pin {
  point: GeoJSONPoint;
  content: string;
  thumbnailUrl: string | null;
}

export interface KakaoFormatPin {
  point: KakaoFormatPosition;
  content: string;
  thumbnailUrl: string | null;
}
