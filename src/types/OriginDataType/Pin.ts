import { GeoPosition } from ".";

export interface Pin {
  point: GeoPosition;
  content: string;
  thumbnailUrl: string | null;
  id?: number;
}
