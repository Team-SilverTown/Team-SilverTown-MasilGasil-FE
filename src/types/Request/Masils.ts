import { GeoPosition, Pin } from "../OriginDataType";

export interface MasilRecordRequest {
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
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
