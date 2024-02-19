import { Address, GeoPosition, Pin } from "../OriginDataType";

export interface MasilRecordRequest {
  address: Address;
  path: GeoPosition[];
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
