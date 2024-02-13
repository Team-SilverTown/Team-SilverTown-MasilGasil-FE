import { GeoJSONPoint } from "./GeoJSON";

export interface Address {
  depth1: string;
  depth2: string;
  depth3: string;
}

export interface Pin {
  point: GeoJSONPoint;
  content: string;
  thumbnailUrl: string | null;
}
