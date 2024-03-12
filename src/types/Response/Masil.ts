import { GeoPosition, Pin } from "../OriginDataType";

export interface MasilDetailResponse {
  id: number;

  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;

  path: GeoPosition[];
  content: string;

  distance: number;
  totalTime: number;
  calories: number;

  startedAt: string;
  pins: Pin[];

  postId: null | string;
  thumbnailUrl: string | null;
}
