import { GeoJSONPoint } from "./GeoJSON";

export interface Pin {
  point: GeoJSONPoint;
  content: string;
  thumbnailUrl: string | null;
}
