import { Address, Pin } from "../OriginDataType";
import { GeoJSONLineString } from "../OriginDataType/GeoJSON";

export interface MasilRecordRequest {
  address: Address;
  path: GeoJSONLineString;
  title: string;
  content: string;
  // M 단위
  distance: number;
  // S 단위
  totalTime: number;
  startedAt: string;
  pins: Pin[];
  thumbnailUrl: string | null;
  postId: string | null;
}
