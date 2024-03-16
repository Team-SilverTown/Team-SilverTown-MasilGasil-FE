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

export interface RecentMasil {
  id: number;
  thumbnailUrl: string;
  startedAt: string;
}

export interface RecentMasilsResponse {
  masils: RecentMasil[];
  isEmpty: boolean;
}
