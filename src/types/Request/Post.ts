import { GeoPosition, Pin } from "../OriginDataType";

export interface PostCreateRequest {
  depth1: String;
  depth2: String;
  depth3: String;
  depth4: String;
  path: GeoPosition[];
  title: String;
  content: String;

  distance: number;
  totalTime: number;
  isPublic: Boolean;
  pins: Pin[];
  thumbnailUrl: String | null;
}
