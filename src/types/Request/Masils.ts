import { Address, GeoJSONLineString, Pin } from "../OriginDataType";

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
