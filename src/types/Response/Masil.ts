import { GeoPosition, Pin } from "../OriginDataType";

export interface MasilDetailResponse {
  id: number;
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;

  // delete 예정
  title: string;
  content: string;
  path: GeoPosition[];

  distance: number;
  totalTime: number;
  startedAt: string;

  postId: null | string;
  thumbnailUrl: string | null;
  pins: Pin[];
}
