import { GeoPosition, Pin } from "../OriginDataType";

export interface MasilResponse {
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

export interface MasilsByPeriod {
  id: string | number;
  address: { depth1: string; depth2: string; depth3: string; depth4: string };
  content: string;
  thumbnailUrl: string;
  distance: number;
  totalTime: number;
  calories: number;
}
export interface MasilsByPeriodResponse {
  totalDistance: number;
  totalCounts: number;
  totalCalories: number;
  masils: [{ date?: string; masils?: MasilsByPeriod[] }];
}
